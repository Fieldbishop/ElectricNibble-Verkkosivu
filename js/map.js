//Leaflet ja Mapbox luovat kartan
const options = {       //Asetukset sijainnille
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}


const map = L.map('map').setView([60.223886, 24.758337], 12);   //Luodaan kartta ja asetetaan se haluttuun pisteeseen

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {     //Asetetaan kartalle pohja
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([60.223886, 24.758337]).addTo(map)     //Asetetaan merkki, annetaan sille nimi ja avataan se
    .bindPopup("Mondo's Modules")
    .openPopup();

fetch("http://api.open-notify.org/iss-now.json")    //Haetaan API:sta ISS:n sijainti. Sijaintiin laitetaan merkki
.then(r => r.json())
.then(jsondata => {
    L.marker([Number(jsondata.iss_position.latitude), Number(jsondata.iss_position.longitude)]).addTo(map)
        .bindPopup("ISS-position")
});


const button = document.querySelector('#location');

//Ei ehditty toteuttamaan Mapboxin directions ominaisuutta
//Hakee nykyisen sijainnin ja avaa google mapsin
button.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(function(pos){
        console.log(pos);
        window.open("https://www.google.com/maps/dir/" + pos.coords.latitude + ","
            + pos.coords.longitude + "/60.223886,24.758337", '_blank');
    }, function() {
        alert("Geolocation is not supported by this browser.");
    }, options);
});
