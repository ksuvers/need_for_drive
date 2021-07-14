$(function() {
    $('sidebar__line').on('click', function() {
        $('main__menu').slideToggle();
    });

    const swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});