function initMap() {
    const shop = { lat: 60.223886, lng: 24.758337};

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: shop,
    });

    new google.maps.Marker({
        position: shop,
        map: map,
    });
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

const button = document.querySelector('#location');

button.addEventListener('click', function() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(pos){
            console.log(pos);
            window.open("https://www.google.com/maps/dir/" + pos.coords.latitude + ","
                + pos.coords.longitude + "/60.223886,24.758337", '_blank');
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }

});
