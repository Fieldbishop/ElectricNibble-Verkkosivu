//Google maps kartta ja reittietsintä nappula
//Google API suorittaa initMap() funktion

const options = {       //Asetukset sijainnille
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

function initMap() {
    const shop = { lat: 60.223886, lng: 24.758337};     //Tallennetaan haluttu karttakohta

    const map = new google.maps.Map(document.getElementById("map"), {   //Luodaan uusi kartta olio
        zoom: 11,       //Zoom taso. 1 = Koko maapallo
        center: shop,   //Kartta keskitetään haluttuun pisteeseen
    }, options);

    new google.maps.Marker({        //Luodaan uusi karttamerkki
        position: shop,             //Asetetaan se haluttuun kohtaan
        map: map,                   //Halutulle kartalle
        title: "Mondo's Modules",   //Otsikko
    });

    fetch("http://api.open-notify.org/iss-now.json")
        .then(r => r.json())
        .then(jsondata => {
            let isspos = { lat: Number(jsondata.iss_position.latitude), lng: Number(jsondata.iss_position.longitude)};
            new google.maps.Marker({
                position: isspos,
                map: map,
                title: "ISS",
            });
    });
}


const button = document.querySelector('#location');

button.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(function(pos){
        console.log(pos);
        window.open("https://www.google.com/maps/dir/" + pos.coords.latitude + ","
            + pos.coords.longitude + "/60.223886,24.758337", '_blank');
    }, function() {
        alert("Geolocation is not supported by this browser.");
    }, options);
});
