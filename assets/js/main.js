
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
});

