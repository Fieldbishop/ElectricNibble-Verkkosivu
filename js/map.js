function initMap() {
    const shop = { lat: 60.223886, lng: 24.758337};

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: shop,
    });

    const marker = new google.maps.Marker({
        position: shop,
        map: map,
    });
}

