const header = document.querySelector('header');
let sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.className = 'sticky';
    } else {
        header.className = 'nonSticky';
        sticky = header.offsetTop;
    }
}

window.onscroll = function() {
    stickyHeader();
};
