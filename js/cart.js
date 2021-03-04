'use strict';

const shop = new ShoppingCart();

shop.getName(0);

const article = document.querySelector('#shoplist');

function createShoppingCart() {
    article.innerHTML = '';
    console.log(shop.getItem().length);

    if(shop.getItem().length !== 0) {
        for (let i = 0; i < shop.getItem().length; i++) {
            let div = document.createElement('div');
            let name = document.createElement('p');
            let price = document.createElement('p');
            let button = document.createElement('button');

            button.className = "remove";

            button.appendChild(document.createTextNode("-"));

            button.addEventListener('click', function() {
                console.log("Remove this:");
                console.log(i);
                shop.removeFromCart(i);
                console.log(shop.getItem());
                createShoppingCart();
            });

            name.innerHTML = shop.getBrand(i) + ", " + shop.getName(i);
            price.innerHTML = shop.getPrice(i) + "€";

            div.appendChild(button);
            div.appendChild(name);
            div.appendChild(price);

            article.appendChild(div);

        }

        let h2 = document.createElement('h2');
        h2.appendChild(
            document.createTextNode("Total: " + String(shop.getTotal()) + "€"));
        article.appendChild(h2);
    } else {
        console.log("HEY");
        let name = document.createElement('h1');
        name.appendChild(document.createTextNode("I think you need more modules..."));
        article.appendChild(name);
        let buyButton = document.querySelector('#buy');
        buyButton.className = 'hidden';
    }

}

let buyButton = document.querySelector('#buy');
buyButton.addEventListener('click', function() {
    alert("Thank you for buying " + shop.getItem().length + " item(s)!\n" +
        "your total: " + shop.getTotal() + "€.");
    shop.removeAll();
    window.open("./index.html", "_self");
});

createShoppingCart();