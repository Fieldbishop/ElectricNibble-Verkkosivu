'use strict';

let json = '[{"name": "First", "price": 25, "picture": {"yksi": "img/lmmao.jpg", "kaksi": "img/samBot.jpg"}}, {"name": "Second", "price": 26, "picture": {"yksi": "img/samBot.jpg", "kaksi": "img/lmmao.jpg"}}, {"name": "Third", "price": 27, "picture": {"yksi": "img/lmmao.jpg", "kaksi": "img/samBot.jpg"}}, {"name": "Fourth", "price": 28, "picture": {"yksi": "img/samBot.jpg", "kaksi": "img/lmmao.jpg"}}, {"name": "Fifth", "price": 29, "picture": {"yksi": "img/lmmao.jpg", "kaksi": "img/samBot.jpg"}}, {"name": "Sixth", "price": 30, "picture": {"yksi": "img/samBot.jpg", "kaksi": "img/lmmao.jpg"}}]';
let jsonObj = JSON.parse(json);

const li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function(f) {
        console.log(i);
    });
}

const cat = document.getElementsByClassName("circle");
const sideBar = document.getElementById("sidebar");
let open = false;

cat[0].addEventListener('click', function(c) {
    if(open) {
        sideBar.className = "";
    } else {
        sideBar.className = "open";
    }

    open = !open;
});

function products(json) {

    for (let i = 0; i < json.length; i++) {

    }

}

