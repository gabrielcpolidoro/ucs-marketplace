document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#swiper-destaques', {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        a11y: {
            enabled: true,
        }
    });
});
