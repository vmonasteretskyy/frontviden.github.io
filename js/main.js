$(document).ready(function () {
//     $(function () {
//         if($('#select-style')){
//             $('#select-style').styler();
//         }
//     });
    (function ($) {
        $(function () {
            $('#select-style').styler();
        });
    })(jQuery);
});

// Show element when page is laod -------------------
window.onload = function() {
    // Top big-img
    var styleElem = document.head.appendChild(document.createElement("style")),
        loadTopShow = document.querySelector('.loadTopShow'),
        windowSizeM = document.documentElement.clientWidth;

    // if(loadTopShow && windowSizeM > 1024){
        styleElem.innerHTML = ".case-body-main::after{ transform: translateX(0%); } .analityc-open.open-v2::after{ transform: translateX(0%); } .analityc-open::after{ transform: translateX(0%); width: 20%; } .digital-main::after{ transform: translateY(0%); } .consulting-main::after{ transform: translateY(0%); } .analityc-main::after { transform: translateY(0%); } .about-top::before { transform: translateY(0%); } .open-case::after { transform: translateY(0%); } .hirinig::after { transform: translateY(0%); } .blog-page::after { transform: translateY(0%); } .pr-policy::after { transform: translateY(0%); } .blog-open::after { transform: translateY(0%); } .contact-page::after { transform: translateY(0%); }";
    // }
    
    // Reting (index-page)
    var topMainBlock = document.querySelector('.first-main .block-top');
    if(topMainBlock){
        topMainBlock.style.opacity = "1";
    }

    // Reting (analityc-v2-page)
    var retingShowBlock = document.querySelector('.opinion-block .block');
    if(loadTopShow){
        if(retingShowBlock){
            retingShowBlock.style.transform = "translateY(0%)";
        }
    }

};

// Scroll menu --------------------------------------
window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled <= 300){
        document.getElementById('menu-line').classList.remove("other-page-header");
    }else{
        document.getElementById('menu-line').classList.add("other-page-header");
    }
}

// Menu show more ------------------------------------
let moreMenuBtn = document.querySelectorAll('.header-line .menu-item-has-children');

for(let i = 0; i < moreMenuBtn.length; i++){
    moreMenuBtn[i].addEventListener('click', (e)=> {
        moreMenuBtn[i].classList.toggle('active');
    });
}

// Show more ----
let moreBlogMenuBtn = document.querySelectorAll('.mobile-menu .menu-item-has-children');

for(let i = 0; i < moreBlogMenuBtn.length; i++){
    moreBlogMenuBtn[i].addEventListener('click', (e)=> {
        moreBlogMenuBtn[i].classList.toggle('active');
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

// Masonry -----------------------------------------------
var elem = document.querySelector('.grid');
if(elem){
    var msnry = new Masonry( elem, {
    itemSelector: '.item',
    columnWidth: '.grid-sizer',
    //   gutter: 40
    });
}
