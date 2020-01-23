$(document).ready(function () {

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


//   mobile menu

    function eventMenu() {
        if (!$('.hamburger').hasClass('is-active')) {
            $('.hamburger').addClass('is-active')
            $('.header-mobile-menu').addClass('view-menu');
            $('.white-layer').addClass('view-layer');
            $('body').css({
                overflow: 'hidden'
            })
        } else {
            $('.hamburger').removeClass('is-active')
            $('.header-mobile-menu').removeClass('view-menu');
            $('.white-layer').removeClass('view-layer');
            $('body').css({
                overflow: 'inherit'
            })
        }
    }


    $('.hamburger').on('click', function () {
        eventMenu();
    });

    $('.white-layer').on('click', function (e) {
        eventMenu();
    });


    $('.button__collapse').on('click', function () {
        var arrow = $(this).find('.button__collapse_arrow-bottom');

        if (arrow.hasClass('rotate-top')) {
            arrow.removeClass('rotate-top');
        } else {
            arrow.addClass('rotate-top');
        }
    })


//    Map


    var map = document.querySelector('#map');

    if (map) {
        ymaps.ready(function () {

            var myMap = new ymaps.Map('map', {
                center: [50.638953, 36.573748],
                zoom: 17,
                // controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });

            myMap.behaviors.disable(['scrollZoom', 'rightMouseButtonMagnifier']);

            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point", // тип геометрии - точка
                    coordinates: [50.638953, 36.573748] // координаты точки
                }
            }, {
                preset: 'islands#yellowIcon'
            });

            myMap.geoObjects
                .add(myGeoObject);
        });
    }


//    Circle-dots
    function circleDots(className) {

        $(className).on('click', function () {

            $(className).each(function () {
                $(this).find('span').removeClass('circle-dots-active');
            });

            if ($(this).find(className).hasClass('circle-dots-active')) {
                $(this).find('span').removeClass('circle-dots-active');
            } else {
                $(this).find('span').addClass('circle-dots-active');
            }
        });
    }
    circleDots('.cause');
    circleDots('.unpacked');


    $('#form-dealer').on('submit', function (e) {
        e.preventDefault();

        console.log($( this ).serialize());

    });




});