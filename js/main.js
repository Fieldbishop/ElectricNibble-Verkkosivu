'use strict';

const ye = document.querySelector('#ye');

fetch('https://api.kanye.rest/').then(function(vastaus) {
    return vastaus.json();
}).then(function(json) {
    let quote = document.createElement('h3');
    quote.appendChild(document.createTextNode(json.quote));
    ye.appendChild(quote);
    let p = document.createElement('p');
    p.appendChild(document.createTextNode("~ Kanye West"));
    ye.appendChild(p);
});

