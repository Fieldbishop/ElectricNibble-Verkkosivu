'use strict';


const source = "modules.json"
fetch(source)
.then(response => response.json())
.then((jsonData) => {
    const tulokset = document.querySelector('main');
    for (let i = 0; i < jsonData.length; i++) {
        console.log(jsonData[i].name);
        console.log(jsonData[i].price);
        let kuva1 = jsonData[i].imageMain;
        let kuva2 = jsonData[i].imageSide;
        
    }
});




/*
for (let i = 0; i < modules.length; i++) {
    console.log(modules[i].);
    
    
    let article = document.createElement('article');
    article.className = "product";
    let fig = document.createElement('figure');
    let a = document.createElement('a');
    a.id = '$i';
    a.className = "productImg";
    a.href = "$product0"
    a.style = "background-image: url('img/samBot.jpg');"
    image = document.createElement('img');
    image.src = "img/lmmao.jpg"
    a.appendChild(image);
    fig.appendChild(a);
    div.appendChild(fig);

}
*/