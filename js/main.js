$(document).ready(function () {
    const mMenuBtn = $('.m-menu-button');
    const searchIcon = $('.search-button');
    const mMenu = $('.m-menu');
    const tab = $('.tab');
    mMenuBtn.on('click', function () {
        mMenu.toggleClass('active');
        $('body').toggleClass('no-scroll');
    });
    searchIcon.on('click', function () {
        mMenu.toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    tab.on('click', function () {
        tab.removeClass('active');
        $(this).toggleClass('active');
        let currentTabContent = $(this).attr('data-target');
        $('.tabs-content').removeClass('visible');
        $(currentTabContent).toggleClass('visible');
    });

    let mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 25,
        navigation: {
            nextEl: '.button-next'
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        }
    })
});
