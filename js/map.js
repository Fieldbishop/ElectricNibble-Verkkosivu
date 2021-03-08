//Leaflet ja Mapbox luovat kartan
const options = {       //Asetukset sijaintihaulle
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtcG9iIiwiYSI6ImNrbHppenJ1NDJkaDMycHAzODhucHBiY2cifQ.-M2VRhZLDhSGvaNH_OhWaA';  //Mapbox api avain

const map = new mapboxgl.Map({      //Luodaan uusi kartta, valitaan kartan tyyli ja asetetaan aloituspaikka
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [24.758337, 60.223886],
    zoom: 12,
});

const end = [24.758337, 60.223886];     //Asetetaan kaupan sijainti

//Funktiolle annetaan aloituspiste sijainnin avulla. Rakentaa viivan ja ohjeet kauppaan
function getRoute(start) {
    const url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' +        //API Json url
        start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] +
        '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

    fetch(url).then(r => r.json()).then(json => {                               //Haetaan Json ja aletaan rakentaa karttamerkkejä
        let data = json.routes[0];
        let route = data.geometry.coordinates;
        const geojson = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: route,
            },
        };

        if (map.getSource('route')) {       //Jos reitti on jo kartassa, päivitetään se
            map.getSource('route').setData(geojson);
        } else {                                //Muuten rakennetaan reitti
            map.addLayer({
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: geojson,
                        },
                    },
                },
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round',
                },
                paint: {
                    'line-color': '#3887be',
                    'line-width': 5,
                    'line-opacity': 0.75,
                },
            });
        }

        //Reittiohjeet
        let instructions = document.getElementById('instructions');     //Elementti johon ohjeet sisällytetään
        let steps = data.legs[0].steps;     //Ohjeet

        let tripInstructions = [];      //Lisätään kaikki ohjeet listaan joka näytetään

        for (let i = 0; i < steps.length; i++) {
            tripInstructions.push('<br><li>' + steps[i].maneuver.instruction) +
            '</li>';
            instructions.innerHTML = '<br><span class="duration">Trip duration: ' +
                Math.floor(data.duration / 60) + 'min </span>'
                + tripInstructions;
        }
    });
}

//Kartan käynnistyessä, laitetaan kaupan ja ISS kohdalle merkki
map.on('load', function() {
    getRoute(end);

    const geojson = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {
                    title: 'Mondo\'s Modules',
                },
                geometry: {
                    type: 'Point',
                    coordinates: end,
                },
            }],
    };
    fetch(
        'http://api.open-notify.org/iss-now.json')    //Haetaan API:sta ISS:n sijainti. Sijaintiin laitetaan merkki
        .then(r => r.json()).then(jsondata => {

        let iss = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {
                        title: 'The ISS',
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [
                            jsondata.iss_position.longitude,
                            jsondata.iss_position.latitude],
                    },
                }],
        };

        iss.features.forEach(function(mark) {   //For each => voitaisi rakentaa monta merkkiä samasta datasetistä
            let el = document.createElement('div');
            el.className = 'marker';
            el.classList.add('iss');
            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).
                setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
                    '<h3>' + mark.properties.title + '</h3>')).
                addTo(map);
        });

    });

    geojson.features.forEach(function(marker) {
        let el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).
            setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
                '<h3>' + marker.properties.title + '</h3>')).
            addTo(map);
    });

});

const button = document.querySelector('#location');     //Nappi reittihaulle

button.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(function(pos) {    //Hakee käyttäjän sijainnin ja tallentaa sen pos

        /*Yksinkertaisempi google reittihaku
        window.open("https://www.google.com/maps/dir/" + pos.coords.latitude + ","
            + pos.coords.longitude + "/60.223886,24.758337", '_blank');
        */

        //Datasetti käyttäjän paikalle
        let start = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: [
                            pos.coords.longitude,
                            pos.coords.latitude
                        ],
                    },
                }],
        };

        if (map.getLayer('start')) {        //Tarkistetaan onko käyttäjä jo kartassa, päivitetään
            map.getSource('start').setData(start);
        } else {                                //Muuten rakennetaan uusi
            map.addLayer({
                id: 'end',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [
                            {
                                type: 'Feature',
                                properties: {},
                                geometry: {
                                    type: 'Point',
                                    coordinates: [
                                        pos.coords.longitude,
                                        pos.coords.latitude
                                    ],
                                },
                            }],
                    },
                },
                paint: {
                    'circle-radius': 10,
                    'circle-color': '#f30'
                },
            });
        }
        //Haetaan reitti
        getRoute([
            pos.coords.longitude,
            pos.coords.latitude]);

    }, function(error) {    //Virheen ilmetessä kerrotaan käyttäjälle ja logataan virhe
        console.log(error);
        alert('Error locating client. Try again...');
    }, options);
});
