/* global $,prompt,alert*/



/*=========Start Background Of nav bar =======*/

var myHead = document.querySelector(".head"),
    
    myNavbarHeader = document.querySelector(".navbar-brand"),
    
    myNavbarLink = document.querySelectorAll(".nav-link"),
    
    myNavbarActive = document.querySelector(".active");

/*======Start Script Of ScrollTop =======*/
var myScroll = document.querySelector(".scroll");


/*=======End Script Of ScrollTop=======*/
    

 window.onscroll = function(){
   
     if(pageYOffset > 60){
         myHead.style.backgroundColor = "white";
         myHead.style.boxShadow = "2px 2px 8px black";
         myNavbarHeader.style.color = "black";
         myNavbarHeader.style.fontWeight = "bold";
         for(var x=0;x<myNavbarLink.length;x++){
             myNavbarLink[x].style.color = "black";
         }
     }
     else{
         
         myHead.style.backgroundColor = "transparent";
         myHead.style.boxShadow = "none";
         myNavbarHeader.style.color = "white";
         for(var x=0;x<myNavbarLink.length;x++){
             
             myNavbarLink[x].style.color = "white";
         }
     }
     /*======Start Script Of ScrollTop =======*/
     
     if(pageYOffset >100){
         
      myScroll.style.opacity = "1";
  }
    else{
        myScroll.style.opacity = "0";
    }
     /*=======End Script Of ScrollTop=======*/
 };
/*===== Function To Chang Color in navBar Item=====*/

function change(y){
    
    for(var x = 0; x<myNavbarLink.length;x++){
        
        if(myNavbarLink[x].classList.contains("active")){
            
            myNavbarLink[x].classList.remove("active");
        }
        else{
            
         myNavbarLink[y].classList.add("active")   
        }
}
}
myNavbarLink[0].onclick = function(){
    change(0);
    var x  = pageYOffset;
    var id = setInterval(function(){
        if(x <= 0){
            clearInterval(id);
        }
        else{
            scrollTo(0,x);
            x -= 50;
        }
    },0);
};
myNavbarLink[1].onclick = function(){
    change(1);
    var x  = pageYOffset;
    var id = setInterval(function(){
        if(x <= 610 && x <= 630){
            scrollTo(0,x);
            x += 20;
            
        }
        else if(x > 640){
             
            scrollTo(0,x);
            x -= 50;
        }
        else{
            clearInterval(id);
        }
    },0);
};
myNavbarLink[2].onclick = function(){
    change(2);
    var x  = pageYOffset;
    var id = setInterval(function(){
        if(x <= 1660 && x <= 1690){
            scrollTo(0,x);
            x += 50;
            
        }
        else if(x > 1690){
             
            scrollTo(0,x);
            x -= 40;
        }
        else{
            clearInterval(id);
        }
    },0);
};
myNavbarLink[3].onclick = function(){
    change(3);
    var x  = pageYOffset;
    var id = setInterval(function(){
        if(x <= 2850 && x <= 2870){
            scrollTo(0,x);
            x += 50;
            
        }
        else if(x > 2870){
             
            scrollTo(0,x);
            x -= 40;
        }
        else{
            clearInterval(id);
        }
    },0);
};
myNavbarLink[4].onclick = function(){
    change(4);
    var x  = pageYOffset;
    var id = setInterval(function(){
        if(x <= 4250 && x <= 4270){
            scrollTo(0,x);
            x += 50;
            
        }
        else if(x > 4270){
             
            scrollTo(0,x);
            x -= 40;
        }
        else{
            clearInterval(id);
        }
    },0);
};
myNavbarLink[5].onclick = function(){
    change(5);
    var x  = pageYOffset;
    var id = setInterval(function(){
        if(x <= 6400 && x <= 6430){
            scrollTo(0,x);
            x += 50;
            
        }
        else if(x > 6430){
             
            scrollTo(0,x);
            x -= 40;
        }
        else{
            clearInterval(id);
        }
    },0);
    myNavbarLink[5].classList.add("active");
};

myNavbarLink[6].onclick = function(){
    change(6);
    var x  = pageYOffset;
    var id = setInterval(function(){
        if(x <= 7250 && x <= 7270){
            scrollTo(0,x);
            x += 50;
            
        }
        else if(x > 7270){
             
            scrollTo(0,x);
            x -= 40;
        }
        else{
            clearInterval(id);
        }
    },0);
    myNavbarLink[6].classList.add("active");
};

/*===== End Of Function To Chang Color in navBar Item=====*/

/*======Start Script Of ScrollTop =======*/

myScroll.onclick = function(){
    var x = pageYOffset;
    
    var id = setInterval(function(){
        if(x >= 0){
                scrollTo(0,x);
                x -= 80;
        }
        else{
            clearInterval(id);
        }
    },
    0);
}


/*=======End Script Of ScrollTop=======*/


/*=====End Background Of Nav Bar ========*/

/*=======start Script Of PreLoader========*/

var preLoader = document.querySelector(".page-loader");

window.onload = function(){
    preLoader.style.display = "none";
};

/*=======end Script Of PreLoader========*/









/*==================Fire All Scripts ================*/

var container = document.querySelector("#parent");

var mixer = mixitup(container);
/*==================================================*/


/*==================Fire Owl carousel Script ================*/

$("#owl-testimonial").owlCarousel({
    pagination: true,
    slideSpeed: 800,
    paginationSpeed: 800,
    smartSpeed: 500,
    autoplay: true,
    singleItem: true,
    loop: true,
    nav:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        580:{
            items:1
        },
        900:{
            items:1
        }
    }
});

/*==================================================*/

/*=================fire Wow Script===================*/
new WOW().init();
/*===============End Fire Wow Of Script==============*/

/*=======Start Fire Of CounteruP==========*/
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
        offset: 70,
    });
});
/*=======End Fire Of CounteruP==========*/
