$(document).ready(function () {
    
    var TopMenuNav = function () {
        var container = $('.nav-container'),
            openBtn = $('.top-nav-open-wrapper');
        
        var init = function () {
            openBtn.on('click', openBtnClickHndlr);
        };
        
        var openBtnClickHndlr = function () {
            if ( container.is('.visible') ) {
                closeNav();
            }
            else {
                openNav();
            }
        };
        
        var openNav = function () {
            container.addClass('visible');
        };
        
        var closeNav = function () {
            container.removeClass('visible');
        };

        return {
            init: init
        }
    };

    if ( $('.nav-container').length ) {
        var topMenuNav = TopMenuNav();
        topMenuNav.init();
    }

    function  initSlick(container, options) {
        container.slick(options);
    }

    if ( $('.top-background-slider-wrapper') ) {
        initSlick( $('.top-background-slider'),{
            prevArrow: false,
            nextArrow: false,
            draggable: false,
            swipe: false,
            autoplay: true,
            autoplaySpeed: 3000,
            asNavFor: '.top-slider'
        });
    }

    if ( $('.top-slider-wrapper').length ) {
        initSlick( $('.top-slider'),  {
            prevArrow: false,
            nextArrow: false,
            asNavFor: '.top-background-slider',
            fade: true,
            draggable: false,
            swipe: false,
            speed: 1000
        });
    }

    function initFlickity(container, options) {
        container.flickity(options);
    }
    
    if ( $('.start-page-products-slider-wrapper').length ) {
        initFlickity($('.start-page-products-slider'), {
            prevNextButtons: false,
            pageDots: false,
            initialIndex: 0,
            cellAlign: 'left',
            contain: true
        });
    }

    var startPageNewProductsSlider = $('.start-page-new-products-slider');

    if ( startPageNewProductsSlider.length ) {
        initFlickity(startPageNewProductsSlider, {
            prevNextButtons: false,
            pageDots: false,
            initialIndex: 0,
            cellAlign: 'left',
            contain: true
        });

        startPageNewProductsSlider.on('click', '.start-page-new-products-slider-item', function () {
            startPageNewProductsSlider.flickity('resize');
        });
    }

    var startPageSaleProductsSlider = $('.start-page-sale-slider');

    if ( startPageSaleProductsSlider.length ) {
        initFlickity(startPageSaleProductsSlider, {
            prevNextButtons: false,
            pageDots: false,
            initialIndex: 0,
            cellAlign: 'left',
            contain: true
        });
    }
});