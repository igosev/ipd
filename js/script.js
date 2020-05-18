$(document).ready(function(){
    setTimeout(function () {
        $('#loader').fadeOut("slow");
    }, 500);
    //Owl carousel
    $(".owl-carousel").owlCarousel({
        items:3,
        loop:true,
        slideBy:3,
        margin:10,
        nav:true,
        dots:false,
        mouseDrag: false,
        navText: ["<i class='fa c-arrow-l'></i>","<i class='fa c-arrow-r'></i>"],
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            768:{
                nav:false,
            },
            1024:{
                nav:true
            }
        }
    });

});