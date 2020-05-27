// Menu show more ------------------------------------
let moreMenuBtn = document.querySelectorAll('.header-line .menu-item-has-children');

for(let i = 0; i < moreMenuBtn.length; i++){
    moreMenuBtn[i].addEventListener('click', (e)=> {
        moreMenuBtn[i].classList.toggle('active');
    });
}

// Menu burger ------------------------------------
let menuBtn = document.querySelectorAll('.menu-btn'),
    menuStatus = document.querySelectorAll('.header-line');
    
if(menuBtn[0] != undefined){
    menuBtn[0].addEventListener('click', (e)=> {
        e.preventDefault();
        menuBtn[0].classList.toggle('menu-btn-active');
        menuStatus[0].classList.toggle('nav-bar-active');
        document.querySelector('body').classList.toggle('scroll-stop');
    });
}

// Case catalog btn open ------------------------------------
let caseBtn = document.querySelector('.navbar-mobile-btn'),
    caseClose = document.querySelector('.close');
    
if(caseBtn != undefined){
    caseBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        document.querySelector('body').classList.add('scroll-stop');
        document.querySelector('body').classList.add('active-menu-case');
    });
}
if(caseClose != undefined){
    caseClose.addEventListener('click', (e)=> {
        e.preventDefault();
        document.querySelector('body').classList.remove('scroll-stop');
        document.querySelector('body').classList.remove('active-menu-case');
    });
}

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  itemSelector: '.item',
  columnWidth: '.grid-sizer',
//   gutter: 40
});