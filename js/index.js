window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".header-nav-list-item__btn").forEach(item => {
        item.addEventListener("click", function () {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".content-menu");

            document.querySelectorAll(".header-nav-list-item__btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("active--btn");
                }
            });

            document.querySelectorAll(".content-menu").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("content-menu--active");
                }
            })
            dropdown.classList.toggle("content-menu--active");
            btn.classList.toggle("active--btn")
        })
    })

    document.addEventListener("click", function (e) {
        let target = e.target;
        if (!target.closest(".header-nav-list")) {
            document.querySelectorAll(".content-menu").forEach(el => {
                el.classList.remove("content-menu--active");
            })
            document.querySelectorAll(".header-nav-list-item__btn").forEach(el => {
                el.classList.remove("active--btn");
            });
        }
    });

    // btn-up

    jQuery(document).ready(function () {
        var btn = $('#btn-up');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });
        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
    });

    // burger-menu

    const burgerbtn = document.getElementsByClassName('burger--btn');
    const burgerbtnFunction = function () {
        document.querySelector('.header-burger').classList.toggle('is-active');
    };
    for (i = 0; i < burgerbtn.length; i++) {
        burgerbtn[i].addEventListener('click', burgerbtnFunction, false);
    }

    // hero-slider
    const heroswiper = new Swiper('.hero-swiper', {
        direction: 'horizontal',
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,

        navigation: {
            nextEl: '.hero-swiper-button-next',
            prevEl: '.hero-swiper-button-prev',
        },

        slidesPerView: 1,
        spaceBetween: 100,
    });

    // mightlikeit-slider
    const mightlikeitswiper = new Swiper('.mightlikeit-swiper', {
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.mightlikeit-swiper-button-next',
            prevEl: '.mightlikeit-swiper-button-prev',
        },

        slidesPerView: 4,
        spaceBetween: 40,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 34
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            1650: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            2000: {
                slidesPerView: 5,
                spaceBetween: 40
            },
        }
    });

    //header accordion-collapse 

    const collapseElementList = document.querySelectorAll('.collapse')
    const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl, {
        toggle: false
    }))

    const collapseElementList2 = document.querySelectorAll('.collapse')
    const collapseList2 = [...collapseElementList2].map(collapseEl => new bootstrap.Collapse(collapseEl, {
        toggle: false
    }))

    //footer accordion 

    $("#footer-accordion").accordion({
        active: false,
        collapsible: true,
        heightStyle: 'content',
    });
})