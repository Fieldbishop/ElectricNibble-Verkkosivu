//Etusivun header liikkuu sivulla liikuttaessa päästyään sivun ylös
const header = document.querySelector('header');    //Valitaan header
let sticky = header.offsetTop;      //Headerin etäisyys ikkunan topista

//Headerin luokaksi annetaan sticky sivun ylhäällä
function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.className = 'sticky';
    } else {
        header.className = 'nonSticky';
        sticky = header.offsetTop;
    }
}

//Tätä päivitetään joka kerta kun sivulla liikutaan
window.onscroll = function() {
    stickyHeader();
};
