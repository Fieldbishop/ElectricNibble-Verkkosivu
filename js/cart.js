'use strict';

const shop = new ShoppingCart();    //Luodaan ostoskori, josta tuotteet näytetään sivulla

const article = document.querySelector('#shoplist');    //Valitaan missä ostoskorin tuotteet näytetään

function createShoppingCart() {
    article.innerHTML = ''; //Tyhjennetään näytetyt tuotteet

    if(shop.getItem().length !== 0) {
        for (let i = 0; i < shop.getItem().length; i++) {
            let div = document.createElement('div');
            let name = document.createElement('p');
            let price = document.createElement('p');
            let button = document.createElement('button');

            button.className = "remove";

            button.appendChild(document.createTextNode("-"));

            //Poisto nappula poistaa tuotteen ostoskorista ja rakentaa elementin uudelleen
            button.addEventListener('click', function() {
                shop.removeFromCart(i);
                createShoppingCart();
            });

            name.innerHTML = shop.getBrand(i) + ", " + shop.getName(i);
            price.innerHTML = shop.getPrice(i) + "€";

            div.appendChild(button);
            div.appendChild(name);
            div.appendChild(price);

            article.appendChild(div);

        }

        //Loppuun kokonaissumma
        let h2 = document.createElement('h2');
        h2.appendChild(
            document.createTextNode("Total: " + String(shop.getTotal()) + "€"));
        article.appendChild(h2);

    } else {
        //Jos ostoskori tyhjä, näytetään viesti ja piilotetaan ostonappula
        let name = document.createElement('h1');
        name.appendChild(document.createTextNode("I think you need more modules..."));
        article.appendChild(name);
        let buyButton = document.querySelector('#buy');
        buyButton.className = 'hidden';
    }

}

//Ostaessa tyhjennetään ostoskori ja näytetään viesti jossa tuotteiden määrä ja kokonaishinta
let buyButton = document.querySelector('#buy');
buyButton.addEventListener('click', function() {
    alert("Thank you for buying " + shop.getItem().length + " item(s)!\n" +
        "your total: " + shop.getTotal() + "€.");
    shop.removeAll();
    window.open("./index.html", "_self");
});

createShoppingCart();
