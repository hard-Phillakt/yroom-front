$(document).ready(function () {

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


//   mobile menu

    $('.hamburger').on('click', function () {

        if(!$('.hamburger').hasClass('is-active')){
            $('.hamburger').addClass('is-active')
            $('.header-mobile-menu').addClass('view-menu');
            $('.white-layer').addClass('view-layer');
        }else {
            $('.hamburger').removeClass('is-active')
            $('.header-mobile-menu').removeClass('view-menu');
            $('.white-layer').removeClass('view-layer');
        }

    })

});