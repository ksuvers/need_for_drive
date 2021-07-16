$(function() {
    $('.side-menu__line').on('click', function() {
        $('.main__menu').slideToggle();
    });
    $('.main__btn').on('click', function() {
        $('.main__menu').slideToggle();
    });
    /* document.querySelector('#menu").classList.add('menu--active'); */
});


new Swiper('.main__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
});