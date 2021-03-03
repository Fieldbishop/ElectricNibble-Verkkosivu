'use strict'

class ShoppingCart {

    constructor() {
        this.total = 0;
        this.items = [];
    }

    addToCart(i) {
        this.items.push(i;
    }

    removeFromCart(i) {
        let newItems = [];
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i] !== i) {
                newItems.push(this.items[i]);
            }
        }
        this.items = newItems;
    }

    getTotal() {
        this.total = 0;

        for (let i = 0; i < this.items.length; i++) {
            this.total += this.items[i].price;
        }
        return this.total;
    }

    getItem(i) {
        return this.items(i);
    }

}