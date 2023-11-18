//document ready
$(function() {
    $('.site-header-hamburger').click(function() {
        $('.site-header-mobile').css('display', 'block');
    });

    $('.mobile-menu-close').click(function() {
        console.log('test')
        $('.site-header-mobile').css('display', 'none');
    });
});