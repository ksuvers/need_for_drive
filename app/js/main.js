var arrLang = {
    'en': {
        'cardsharing': 'Каршеринг  Need for drive',
        'need': 'Need for drive',
        'rental': 'Поминутная аренда авто твоего города',
        'booking': 'Забронировать',
        'parking': 'Бесплатная парковка',
        'leave': 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        'detailed': 'Подробнее',
        'insurance': 'Страховка',
        'car insurance': 'Полная страховка автомобилей.',
        'Gasoline': 'Бензин',
        'full tank': 'Полный бак на любой заправке города за наш счёт.',
        'Service': 'Обслуживание',
        'car passes': 'Автомобиль проходит еженедельное ТО.',
    },
    'ru': {
        'cardsharing': ' Cardsharing Need for drive',
        'need': 'Need for drive',
        'rental': 'Minute-by-minute car rental in your city',
        'booking': 'To book',
        'parking': 'Free parking',
        'leave': 'Leave your car in paid city parking lots and permitted places without violating traffic rules, as well as at airports.',
        'detailed': 'More detailed',
        'insurance': 'Insurance',
        'car insurance': 'Full car insurance.',
        'Gasoline': 'Gasoline',
        'full tank': 'A full tank at any gas station in the city is at our expense.',
        'Service': 'Service',
        'car passes': 'The car passes a weekly maintenance.',
    }
}


$(function() {
    $('.side-menu__lang').each(function(index, item) {
        item.addEventListener('click', function() {

            var lang = $(this).attr('id');

            $('.lang').each(function(index, item) {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            });
        });
    });
});


$('.side-menu__lang').on('click', function() {

    if ($(this).hasClass('Eng')) {
        $(this).removeClass('Eng').text('Рус');
        this.id = 'en'
    } else {
        $(this).addClass('Eng').text('Eng');
        this.id = 'ru'

    }
});

$(function() {
    $('.side-menu__line').on('click', function() {
        $('.main__menu').slideToggle();
    });
    $('.main__btn').on('click', function() {
        $('.main__menu').slideToggle();
    });
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