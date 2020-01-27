// 1.
// filter-slider-price ################################################
var filterSliderPrice = document.getElementById('filter-slider-price');
if (filterSliderPrice) {
    noUiSlider.create(filterSliderPrice, {
        start: [100, 900],
        connect: true,
        step: 1,
        range: {
            'min': 0,
            'max': 1000
        }
    });

    filterSliderPrice.noUiSlider.on('update', function (values, handle) {
        $('.input-price-after').val(values[0]);
        $('.input-price-before').val(values[1]);
    });

// filter-slider-price end #############################################
}


var filterSliderSquares = document.getElementById('filter-slider-squares');
if (filterSliderSquares) {
    // 2.
// filter-slider-squares ################################################


    noUiSlider.create(filterSliderSquares, {
        start: [1, 9],
        connect: true,
        step: 1,
        range: {
            'min': 0,
            'max': 10
        }
    });

    filterSliderSquares.noUiSlider.on('update', function (values, handle) {
        $('.input-squares-after').val(values[0]);
        $('.input-squares-before').val(values[1]);
    });

// filter-slider-squares end #############################################
}

