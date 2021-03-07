'use strict'

//Ostoskori olio ja ostoskori painikkeen logiikka

class ShoppingCart {

    constructor() {
        this.total = 0;     //Tuotteiden kokonaishinta

        this.items = [];    //Array joka sisältää tuotteiden JSON tiedot, aluksi tyhjä

        //Jos eväste on olemassa, ladataan se items arvoksi
        if(checkCookie() !== "") {
            this.items = JSON.parse(checkCookie()); //Muutetaan JSON muodosta olioksi
        }

    }

    //Lisää listaan puskemalla annettu index. Tallennetaan kori tämän jälkeen
    addToCart(i) {
        this.items.push(i);
        this.saveCart();
    }

    //Poistetaan annettu index. Tallennetaan kori
    removeFromCart(item) {
        this.items.splice(item, 1);
        this.saveCart();
    }

    //Tyjennetään lista antamalla tyhjä arvo. Tallennetaan kori
    removeAll() {
        this.items = [];
        this.saveCart();
    }

    //Käydään lista läpi ja lisäämällä jokainen price. Palautetaan yhteistulos
    getTotal() {
        this.total = 0;

        for (let i = 0; i < this.items.length; i++) {
            this.total += this.items[i].price;
        }
        return this.total;
    }

    //Palauttaa koko listan. Tällä tallennetaan eväste
    getItem() {
        return this.items;
    }

    //Tallentaa koko ostoskorin evästeeksi. Resetoi 15min ajastimen ostoskorille
    //Muuntaa arrayn ja sen objektit string muotoon
    saveCart() {
        let now = new Date();
        now.setTime(now.getTime() + (15 * 60 * 1000));
        document.cookie = "cart=" + JSON.stringify(this.items) + ";SameSite=lax;expires=" + now.toUTCString() + ";";
    }

    //Antaa indexin nimen
    getName(i) {
        try {
            return this.items[i].name;
        } catch {
            return 0;
        }
    }

    //Antaa indexin hinnan
    getPrice(i) {
        return this.items[i].price;
    }

    //Antaa indexin brandi nimen
    getBrand(i) {
        return this.items[i].brand;
    }

}

//Logiikka shopping cart ikonille ja pallolle joka kertoo kuinka monta tuotetta korissa
//Luo elementit ja muuntaa numeroa
function iconCart() {

    let buyButton = document.querySelector('#cartIcon');

    //Jos tyhjä, ei tee mitään
    if(shop.getItem().length !== 0) {
        let div = document.createElement('div');
        let cartNum = document.createElement('p');
        cartNum.appendChild(
            document.createTextNode(String(shop.getItem().length)));
        div.className = "circle";
        div.appendChild(cartNum);
        buyButton.appendChild(div);

    }

    //Klikkaamalla vie ostoskori-sivulle
    buyButton.addEventListener('click', function() {
        window.open("./shoppingCart.html", "_self");
    });

}
