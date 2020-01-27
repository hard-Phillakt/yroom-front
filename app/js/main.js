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

    $('.white-layer').on('click', function () {
        eventMenu();
    });


    // Collapse Vacancy and Filter product
    function collapse(vacancy) {
        $(vacancy.btnCollapse).on('click', function () {
            var arrow = $(this).find(vacancy.btnArrow);
            arrow.hasClass(vacancy.classRotate) ? arrow.removeClass(vacancy.classRotate) : arrow.addClass(vacancy.classRotate);
        });
    }

    var vacancy = {
        btnCollapse: '.button__collapse',
        btnArrow: '.button__collapse_arrow-bottom',
        classRotate: 'rotate-top'
    };

    var filter = {
        btnCollapse: '.filter-arrow-wrapp',
        btnArrow: '.filter-arrow-close ',
        classRotate: 'filter-arrow-open'
    };

    collapse(vacancy);
    collapse(filter);

    // Collapse Vacancy and Filter product end


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


    // Filter check-box
    function checkBox(checkbox) {

        $(checkbox.btnCheckBox).on('click', function (e) {
            e.preventDefault();

            var checkboxFind = $(this).find(checkbox.type);
            var checkboxInput = $(this).find('input');

            if (checkboxFind.hasClass(checkbox.checkBoxCheck)) {
                checkboxFind.removeClass(checkbox.checkBoxCheck);
                checkboxInput.prop('checked', false);
            } else {
                checkboxFind.addClass(checkbox.checkBoxCheck);
                checkboxInput.prop('checked', true);
            }
        });
    }

    var checkbox = {
        btnCheckBox: '.checkbox-box',
        type: '.checkbox',
        checkBoxCheck: 'checkbox__check'
    };

    checkBox(checkbox);


    // Test form dealer
    $('#form-dealer').on('submit', function (e) {
        e.preventDefault();

        console.log($(this).serialize());

    });

    $('[data-toggle="tooltip"]').tooltip({
        html: true
    });


    // amountCard increment && decrement

    var increment = '+';
    var decrement = '-';

    function amountCard(btn) {

        btn.each(function (index, item) {

            $(this).on('click', function () {

                var cardAmount = parseInt($('.card-amount').eq(index).val()) ? parseInt($('.card-amount').eq(index).val()) : alert('Не верное значение!');

                if(parseInt(cardAmount)){
                    switch ($(this).html()) {
                        case increment:
                            cardAmount++;
                            $('.card-amount').eq(index).val(cardAmount) ;
                            break;

                        case decrement:
                            if(cardAmount > 1){
                                cardAmount--;
                                $('.card-amount').eq(index).val(cardAmount) ;
                            }
                            break;

                        default:
                            return true;
                            break;
                    }
                }else {
                    $('.card-amount').eq(index).val(1);
                }

            })
        });
    }

    amountCard($('.button__increment'));
    amountCard($('.button__decrement'));

    // Clear value from input-amount

    $('.card-amount').each(function () {
        $(this).on('blur', function () {
            $(this).val() < 1 ? $(this).val(1) : true;
        })
    });


//  Cart




});