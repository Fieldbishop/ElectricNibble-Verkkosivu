'use strict';

//Ostoskorin tallentamiseen käytetään evästeitä
//Sivulle tullessa haluttu eväste haetaan ja luetaan sen tiedot. Jos evästettä ei löydy, uusi tyhjä eväste luodaan
//Eväste säilyy 15 minuuttia
//Evästeen muoto: EVÄSTEEN-NIMI:DATA;SameSite=lax;expires=DATE;

//Haetaan eväste jonka nimi on cookie
function getCookie(cookie) {
    let name = cookie + "=";
    const decodeCookie = decodeURIComponent(document.cookie);   //Eväste avataan
    const ca = decodeCookie.split(';');     //Eritellään evästeen osat

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        //Palautetaan DATA osion data
        if(c.indexOf(name) === 0) {
            console.log(c.substring(name.length, c.length));
            return c.substring(name.length, c.length);
        }
    }
    //Jos ei dataa, palautetaan tyhjä
    return "";
}

function checkCookie() {
    const cookie = getCookie("cart");

    //Jos ei dataa, luodaan uusi eväste
    if (cookie === "") {
        let now = new Date();   //Haetaan tämänhetkinen aika
        now.setTime(now.getTime() + (15 * 60 * 1000));  //Ja lisätään siihen 15min
        document.cookie = "cart=;SameSite=lax;expires=" + now.toUTCString() + ";";  //Tyhjä eväste
    }

    return cookie;  //Palautetaan eväste
}

