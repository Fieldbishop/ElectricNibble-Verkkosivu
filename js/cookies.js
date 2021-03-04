'use strict';

function getCookie(cookie) {
    let name = cookie + "=";
    const decodeCookie = decodeURIComponent(document.cookie);
    const ca = decodeCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if(c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    const cookie = getCookie("cart");

    if (cookie !== "") {
        console.log("Cookie loaded");
        console.log(cookie);
    } else {
        document.cookie = "cart=;SameSite=lax";
        console.log("Cookie created");
    }
    return cookie;
}

let cartIcon = document.querySelector('#cartIcon');
cartIcon.addEventListener('click', function() {
    window.open("./shoppingCart.html", "_self");
});

