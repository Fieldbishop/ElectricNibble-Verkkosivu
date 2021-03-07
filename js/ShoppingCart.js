'use strict'

class ShoppingCart {

    constructor() {
        this.total = 0;

        this.items = [];

        if(checkCookie() !== "") {
            this.items = JSON.parse(checkCookie());
        }

    }

    addToCart(i) {
        this.items.push(i);
        console.log(this.getTotal());
        this.saveCart();
    }

    removeFromCart(item) {
        this.items.splice(item, 1);
        this.saveCart();
    }

    removeAll() {
        this.items = [];
        this.saveCart();
    }

    getTotal() {
        this.total = 0;

        for (let i = 0; i < this.items.length; i++) {
            this.total += this.items[i].price;
        }
        return this.total;
    }

    getItem() {
        return this.items;
    }

    saveCart() {
        console.log("Saved");
        document.cookie = "cart=" + JSON.stringify(this.items) + ";SameSite=lax";
    }

    getName(i) {
        try {
            return this.items[i].name;
        } catch {
            return 0;
        }
    }

    getPrice(i) {
        return this.items[i].price;
    }

    getBrand(i) {
        return this.items[i].brand;
    }

}

function iconCart() {
    if(shop.getItem().length !== 0) {
        let div = document.createElement('div');
        let cartNum = document.createElement('p');
        cartNum.appendChild(
            document.createTextNode(String(shop.getItem().length)));
        let buyButton = document.querySelector('#cartIcon');
        div.className = "circle";
        div.appendChild(cartNum);
        buyButton.appendChild(div);
    }
}