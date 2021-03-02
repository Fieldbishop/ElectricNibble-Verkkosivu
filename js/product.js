'use strict';

function productSite() {
    const h1 = document.getElementById('num');

    console.log("url: " + document.URL);

    let s = document.URL;

    s = s.slice(-2);

    s = s.replace('#', '');

    h1.innerHTML = s + ' + 1';
}

productSite();
