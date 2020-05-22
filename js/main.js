// $(document).ready(function () { 
//     if($('.slider-case')){
//         $('.slider-case').slick({
//             infinite: true,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             nextArrow: '<button type="button" class="slick-next"></button>',
//             prevArrow: '<button type="button" class="slick-prev"></button>',
//             dots: false,
//             swipe: true,
//             swipeToSlide: true,
//             draggable: true,
//         });
//     };
// });


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
    });
}