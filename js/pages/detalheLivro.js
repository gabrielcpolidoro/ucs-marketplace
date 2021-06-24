document.addEventListener('DOMContentLoaded', function () {
    const swiperImgs = new Swiper('#swiper-imagens-produto', {
        grabCursor: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
    });

    const swiperSemelhantes = new Swiper('#swiper-semelhantes', {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        a11y: {
            enabled: true,
        }
    });
})