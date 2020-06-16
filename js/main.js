$(document).ready(function () {
    $(function () {
        if($('#select-style')){
            $('#select-style').styler();
        }
    });
});

// Show element when page is laod -------------------
window.onload = function() {
    var topMainBlock = document.querySelector('.first-main .block-top');
    if(topMainBlock){
        topMainBlock.style.opacity = "1";
    }

    var styleElem = document.head.appendChild(document.createElement("style")),
        loadTopShow = document.querySelector('.loadTopShow');
    if(loadTopShow){
        // styleElem.innerHTML = ".analityc-main::after { transform: translateY(0%); }";
        // styleElem.innerHTML = ".about-top::before { transform: translateY(0%); }";
        // styleElem.innerHTML = ".open-case::after { transform: translateY(0%); }";
        // styleElem.innerHTML = ".hirinig::after { transform: translateY(0%); }";
        // styleElem.innerHTML = ".blog-page::after { transform: translateY(0%); }";
        // styleElem.innerHTML = ".blog-open::after { transform: translateY(0%); }";
        // styleElem.innerHTML = ".contact-page::after { transform: translateY(0%); }";
        styleElem.innerHTML = ".analityc-open.open-v2::after{ transform: translateX(0%); } .analityc-open::after{ transform: translateX(0%); width: 20%; } digital-main::after{ transform: translateY(0%); } .consulting-main::after{ transform: translateY(0%); } .analityc-main::after { transform: translateY(0%); } .about-top::before { transform: translateY(0%); } .open-case::after { transform: translateY(0%); } .hirinig::after { transform: translateY(0%); } .blog-page::after { transform: translateY(0%); } .pr-policy::after { transform: translateY(0%); } .blog-open::after { transform: translateY(0%); } .contact-page::after { transform: translateY(0%); }";
    }

    var retingShowBlock = document.querySelector('.opinion-block .block');
    if(loadTopShow){
        if(retingShowBlock){
            retingShowBlock.style.transform = "translateY(0%)";
        }
    }

};

window.onscroll = function() {
// Scroll menu --------------------------------------
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled <= 300){
        document.getElementById('menu-line').classList.remove("other-page-header");
    }else{
        document.getElementById('menu-line').classList.add("other-page-header");
    }

    console.log(scrolled);

// Show element when page is scroll --------------------------------------
    var windowSize = document.documentElement.clientWidth,
        caseMain = document.querySelector('.case-body-main'),
        casePosts = document.querySelectorAll('.case-body-main .case-posts .item');

        for(let i = 0; i < casePosts.length; i++){
            if(i == 0 || i == 3 || i == 6){
                casePosts[i].style.cssText = "transform: translateY(-10%); opacity: 0; ";
            }
            if(i == 1 || i == 4 || i == 7){
                casePosts[i].style.cssText = "transform: translateY(-20%); opacity: 0;";
            }
            if(i == 2 || i == 5 || i == 8){
                casePosts[i].style.cssText = "transform: translateY(-30%); opacity: 0;";
            }
        }

    if(windowSize <= 1920 && windowSize > 1601){ 
        if(caseMain && scrolled > 1){
            document.querySelector('main').classList.add("scrollShowElement");
            for(let i = 0; i < casePosts.length; i++){
                if(i <= 2){
                    casePosts[i].style.cssText = "transform: translateY(0%); opacity: 1;";
                }
            }
        }
        if(caseMain && scrolled >= 200){
            for(let i = 0; i < casePosts.length; i++){
                if(i <= 5 && i > 2){
                    casePosts[i].style.cssText = "transform: translateY(0%); opacity: 1;";
                }
            }
        }
        if(caseMain && scrolled >= 600){
            for(let i = 0; i < casePosts.length; i++){
                if(i <= 8 && i > 3){
                    casePosts[i].style.cssText = "transform: translateY(0%); opacity: 1;";
                }
            }
        }
    }

    if(windowSize <= 1600){ 
        if(caseMain && scrolled >= 0){
            for(let i = 0; i < casePosts.length; i++){
                if(i <= 2){
                    casePosts[i].style.cssText = "transform: translateY(0%);";
                }
            }
        }
        if(caseMain && scrolled >= 50){
            for(let i = 0; i < casePosts.length; i++){
                if(i <= 5 && i > 2){
                    casePosts[i].style.cssText = "transform: translateY(0%);";
                }
            }
        }
        if(caseMain && scrolled >= 300){
            for(let i = 0; i < casePosts.length; i++){
                if(i <= 8 && i > 3){
                    casePosts[i].style.cssText = "transform: translateY(0%);";
                }
            }
        }
    }
    
    var indexMain = document.querySelector('.first-main');

    if(windowSize <= 1920 && windowSize > 1600){ 
        if(indexMain && scrolled >= 2200){
            document.querySelector('main').classList.add("scrollShowElement");
        }
    }else if(windowSize <= 1600 && windowSize > 1300){
        if(indexMain && scrolled >= 1800){
            document.querySelector('main').classList.add("scrollShowElement");
        }
    }else if(windowSize <= 1300 && windowSize >= 1150){
        if(indexMain && scrolled >= 1400){
            document.querySelector('main').classList.add("scrollShowElement");
        }
    }else if(windowSize <= 1150 && windowSize > 992){
        if(indexMain && scrolled >= 1100){
            document.querySelector('main').classList.add("scrollShowElement");
        }
    }else if(windowSize <= 992){
        if(indexMain){
            document.querySelector('main').classList.add("scrollShowElement");
        }
    }

    var about = document.querySelector('.about-top');

    if(windowSize <= 1920 && windowSize >= 1600){
        if(about && scrolled > 3100){
            document.querySelector('main').classList.add("scrollShowElement");
        }
    }else if(windowSize <= 1600 && windowSize >= 1150){
        if(about && scrolled > 2200){
            document.querySelector('main').classList.add("scrollShowElement");
        }
    }else if(windowSize <= 1150 && windowSize >= 992){
        if(about && scrolled > 1800){
            document.querySelector('main').classList.add("scrollShowElement");
        }
    }else if(windowSize <= 992){
        if(about){
            document.querySelector('main').classList.add("scrollShowElement");
        }
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