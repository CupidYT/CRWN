
jQuery(document).ready(function ($) {
    // Mobile navigation
    $('.menu-open-mobile').click(function () {
        $('body').addClass('mobile-menu-open')
        $('.menu-off-canvas').addClass('mobile-menu-active')
    })

    $('.mobile-menu-close-inner, .site-overlay').click(function () {
        $('body').removeClass('mobile-menu-open')
        $('.menu-off-canvas').removeClass('mobile-menu-active')
    })

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $('body').removeClass('mobile-menu-open')
            $('.menu-off-canvas').removeClass('mobile-menu-active')
        }
    });

    // Filtre
    $('.filtre-toggle').click(function () {
        $('body').addClass('filtre-menu-open')
        $('.filtre-off-canvas').addClass('filtre-menu-active')
    })

    $('.filtre-menu-close-inner, .site-overlay').click(function () {
        $('body').removeClass('filtre-menu-open')
        $('.filtre-off-canvas').removeClass('filtre-menu-active')
    })

    $(document).keydown(function (e) {
        if (e.keyCode == 30) {
            $('body').removeClass('filtre-menu-open')
            $('.filtre-off-canvas').removeClass('filtre-menu-active')
        }
    });

    // About Slider
    var swiperAboutOptions = {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 30,
        loop: false,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    }
    var swiperAbout = new Swiper('.aboutSlider', swiperAboutOptions)

    // Accordions
    $('.accordions-block > .accordion-item.is-active')
        .children('.accordion-content')
        .slideDown()
    $('.accordions-block > .accordion-item').click(function () {
        $(this)
            .siblings('.accordion-item')
            .removeClass('is-active')
            .children('.accordion-content')
            .slideUp()
        $(this)
            .toggleClass('is-active')
            .children('.accordion-content')
            .slideToggle('ease-out')
    })

    // Tab
    jQuery('.tab-link').click(function () {
        var tabId = jQuery(this).attr('data-tab');

        jQuery('.tab-link').removeClass('active');
        jQuery('.tab-item-info').removeClass('active');

        jQuery(this).addClass('active');
        jQuery("#" + tabId).addClass('active');
    });


});

