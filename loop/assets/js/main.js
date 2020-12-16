/* ==========================================================================

   Table of content:

   1. Custom mouse cursor
   2. Animsition preloader
   3. Swiper slider
   4. Isotope
   5. Scroll animations
   6. Navigation open/close
   7. Drop-down menu
   8. Change menu background
   9. Magnific popup
   10. Touch, no touch
   11. Contact form
   12. Marquee
   13. Splitting
   14. SplitLines

   ========================================================================== */





$(function () {
    "use strict";

    /* 1. Custom mouse cursor */
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px"
    });
    var
        e = document.getElementById("js-pointer");

    $(document).mousemove(function (e) {

        $(".js-pointer-large, .swiper-button-next, .swiper-button-prev, .mfp-arrow-left, .mfp-arrow-right")
            .on("mouseenter", function () {
                $('.js-pointer').addClass("js-large")
            })
            .on("mouseleave", function () {
                $('.js-pointer').removeClass("js-large")
            })

        $(".js-pointer-small, .swiper-pagination-bullet")
            .on("mouseenter", function () {
                $('.js-pointer').addClass("js-small")
            })
            .on("mouseleave", function () {
                $('.js-pointer').removeClass("js-small")
            })

        $(".js-pointer-drag")
            .on("mouseenter", function () {
                $('.js-pointer').addClass("js-drag")
            })
            .on("mouseleave", function () {
                $('.js-pointer').removeClass("js-drag")
            })

        $(".js-pointer-zoom")
            .on("mouseenter", function () {
                $('.js-pointer').addClass("js-zoom")
            })
            .on("mouseleave", function () {
                $('.js-pointer').removeClass("js-zoom")
            })

        $(".js-pointer-none")
            .on("mouseenter", function () {
                $('.js-pointer').addClass("js-none")
            })
            .on("mouseleave", function () {
                $('.js-pointer').removeClass("js-none")
            })

    });

    $(document).ready(function () {
        $("#who-we-read").click(function () {
            $("#who-we-more").toggleClass("hidden");
            $("#who-more").toggleClass("hidden");
            $("#who-less").toggleClass("hidden");
        });

        var countries = new Array("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe");
        
        for (var i = 0; i < countries.length; i++) {
            $('#country')
                .append($("<option></option>")
                    .attr("value", countries[i])
                    .text(countries[i]));
        }

        /* 2. Animsition preloader */
        $(".js-animsition-overlay").animsition({
            inClass: 'overlay-slide-in-right',
            outClass: 'overlay-slide-out-right',
            inDuration: 1,
            outDuration: 1500,
            linkElement: '.js-animsition-link',
            // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
            loading: false,
            loadingParentElement: 'body', //animsition wrapper element
            loadingClass: 'animsition-loading',
            loadingInner: '', // e.g '<img src="loading.svg" />'
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: ['animation-duration', '-webkit-animation-duration'],
            // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
            overlay: true,
            overlayClass: 'js-animsition-overlay-slide',
            overlayParentElement: 'body',
            transition: function (url) {
                window.location.href = url;
            }
        });

        $('body').on('animsition.outStart', function () {
            $('body').removeClass('js-page-in-out');
            $('body').addClass('js-page-out');
        })

        $('body').on('animsition.inEnd', function () {
            $('body').addClass('js-page-in-out');
            $('body').addClass('js-page-in');
            setTimeout(function () {
                $("body").addClass("js-page-in-anim-active");
            }, 1000);

            /* 3. Swiper slider */
            var interleaveOffset = 0.5;

            var homeSwiper = new Swiper('.js-home-slider', {
                autoplay: {
                    delay: 4500,
                },
                speed: 1300,
                watchSlidesProgress: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                on: {
                    progress: function () {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            var slideProgress = swiper.slides[i].progress;
                            var innerOffset = swiper.width * interleaveOffset;
                            var innerTranslate = slideProgress * innerOffset;
                            swiper.slides[i].querySelector(".js-parallax-slide-bg").style.transform =
                                "translate3d(" + innerTranslate + "px, 0, 0)";
                        }
                    },
                    touchStart: function () {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = "";
                        }
                    },
                    setTransition: function (speed) {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = speed + "ms";
                            swiper.slides[i].querySelector(".js-parallax-slide-bg").style.transition =
                                speed + "ms";
                        }
                    }
                }
            });

            var fullscreenSwiper = new Swiper('.js-fullscreen-slider', {
                speed: 1300,
                watchSlidesProgress: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                on: {
                    progress: function () {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            var slideProgress = swiper.slides[i].progress;
                            var innerOffset = swiper.width * interleaveOffset;
                            var innerTranslate = slideProgress * innerOffset;
                            swiper.slides[i].querySelector(".js-parallax-slide-bg").style.transform =
                                "translate3d(" + innerTranslate + "px, 0, 0)";
                        }
                    },
                    touchStart: function () {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = "";
                        }
                    },
                    setTransition: function (speed) {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = speed + "ms";
                            swiper.slides[i].querySelector(".js-parallax-slide-bg").style.transition =
                                speed + "ms";
                        }
                    }
                },
                mousewheel: {
                    sensitivity: 1
                }
            });

            var carouselSwiperBg = new Swiper(".js-carousel-slider-bg", {
                speed: 1300,
                slidesPerView: 1,
                spaceBetween: 800,
                parallax: true
            });

            var carouselSwiper = new Swiper('.js-carousel-slider', {
                speed: 1300,
                slidesPerView: 1,
                spaceBetween: 800,
                mousewheel: {
                    sensitivity: 1
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true
                },
                thumbs: {
                    swiper: carouselSwiperBg
                }
            });

            var view2Swiper = new Swiper('.js-2-view-slider', {
                slidesPerView: 1,
                centeredSlides: true,
                speed: 1400,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true
                },
                breakpoints: {
                    1000: {
                        slidesPerView: 2
                    }
                }
            });

            var view1Swiper = new Swiper('.js-1-view-slider', {
                speed: 1400,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true
                }
            });

            var infiniteSwiper = new Swiper('.js-infinite-slider', {
                slidesPerView: 2,
                spaceBetween: 20,
                speed: 5000,
                loop: true,
                autoplay: {
                    delay: 0
                },
                breakpoints: {
                    400: {
                        slidesPerView: 3
                    },
                    550: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 5
                    },
                    1000: {
                        slidesPerView: 6
                    }
                }
            });

            var skillsSwiper = new Swiper('.js-skills-slider', {
                slidesPerView: 1.2,
                speed: 2000,
                spaceBetween: 40,
                freeMode: true,
                breakpoints: {
                    550: {
                        slidesPerView: 1.3
                    },
                    768: {
                        slidesPerView: 1.2,
                        spaceBetween: 80
                    },
                    1000: {
                        slidesPerView: 1.4,
                        spaceBetween: 80
                    }
                }
            });

             var skillsSwiper = new Swiper('.js-skills-slider-2', {
                slidesPerView: 1,
                speed: 2000,
                spaceBetween: 40,
                autoplay: {
                    delay: 2500,
                }
            });

            
            var servicesSwiper = new Swiper('.js-services-slider', {
                slidesPerView: 1.2,
                speed: 2000,
                spaceBetween: 40,
                freeMode: true,
                breakpoints: {
                    550: {
                        slidesPerView: 1.3
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 80
                    }
                }
            });

            var teamSwiper = new Swiper('.js-team-slider', {
                slidesPerView: 1.3,
                speed: 2000,
                spaceBetween: 40,
                freeMode: true,
                breakpoints: {
                    550: {
                        slidesPerView: 1.5
                    },
                    768: {
                        slidesPerView: 1.8,
                        spaceBetween: 80
                    }
                }
            });

            var appSwiper = new Swiper('.app-slider', {
                slidesPerView: 1,
                effect: 'flip',
                pagination: {
                    el: '.app-pagination',
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: function (index, className) {
                        switch (index) {
                            case 0:
                                return `<div class="four-columns find ` + className + ` phone-f-b-33">
                                            <h3 class="text-color-blue app-label text-center">Find</h3>
                                            <p class="body-text-s text-color-black margin-top-10 text-center" style="line-height: 1.5">In a hurry <br>just find a Loop <br>near by you.</p>
                                        </div>`;
                            case 1:
                                return `<div class="four-columns scan ` + className + ` phone-f-b-33">
                                            <h3 class="text-color-blue app-label text-center">Scan</h3>
                                            <p class="body-text-s text-color-black margin-top-10 text-center"style=":1.5">Scan the Loop <br>Scooter with your <br>mobile or type in <br>code to activate.</p>
                                        </div>`;
                            case 2:
                                return `<div class="four-columns ride ` + className + ` phone-f-b-33">
                                            <h3 class="text-color-blue app-label text-center">Ride</h3>
                                            <p class="body-text-s text-color-black margin-top-10 text-center"style=":1.5">Fasten helmet, <br>hop on scooter <br>and start journey.</p>
                                        </div>`;
                            default:
                                return '<span class="app-slider-bullet ' + className + '">' + (index + 1) + '</span>';
                        }
                    },
                },
                width: 110,
                height: 240,
                breakpoints: {
                    769: {
                        width: 165,
                        height: 360,
                    },
                    1600: {
                        width: 220,
                        height: 480,
                    },
                },
            });

            var appSwiperAr = new Swiper('.app-slider-ar', {
                slidesPerView: 1,
                effect: 'flip',
                pagination: {
                    el: '.app-pagination-ar',
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: function (index, className) {
                        switch (index) {
                            case 0:
                                return `<div class="four-columns find ` + className + ` phone-f-b-33">
                                            <h3 class="text-color-blue app-label text-center ar">إيجاد</h3>
                                            <p class="body-text-s text-color-black margin-top-10 text-center ar" style="line-height: 1.5">حدد اقرب  <br> إسكوتر بسهولة<br> وتوجه إليه </p>
                                        </div>`;
                            case 1:
                                return `<div class="four-columns scan ` + className + ` phone-f-b-33">
                                            <h3 class="text-color-blue app-label text-center ar">مسح</h3>
                                            <p class="body-text-s text-color-black margin-top-10 text-center ar"style=":1.5">إمسح الكيو آر كود  <br>الخاص بالسكوتر أو أكتب رقمها<br> لتفعيل السكوتر</p>
                                        </div>`;
                            case 2:
                                return `<div class="four-columns ride ` + className + ` phone-f-b-33">
                                            <h3 class="text-color-blue app-label text-center ar">قيادة</h3>
                                            <p class="body-text-s text-color-black margin-top-10 text-center ar"style=":1.5">إرتدي خوذتك <br> و إركب الإسكوتر <br>و تمتع برحلتك</p>
                                        </div>`;
                            default:
                                return '<span class="app-slider-bullet ' + className + '">' + (index + 1) + '</span>';
                        }
                    },
                },
                width: 110,
                height: 240,
                breakpoints: {
                    769: {
                        width: 165,
                        height: 360,
                    },
                    1600: {
                        width: 220,
                        height: 480,
                    },
                },
            });

            /* 4. Isotope */
            $('.js-isotope-grid-box').isotope({
                itemSelector: '.js-isotope-grid-item',
                percentPosition: true
            });

            /* 5. Scroll animations */
            var scroll = new LocomotiveScroll({
                el: document.querySelector('#js-scroll-content'),
                smooth: true
            });

        });

        /* 6. Navigation open/close */
        $(".js-menu-open-close").on("click", function () {
            $('body').toggleClass('js-nav-active');
        });

        /* 7. Drop-down menu */
        $('.js-dropdown-open').on("click", function () {
            $('.js-dropdown-active-box').addClass('js-dropdown-is-active');
            $(this).find('.js-dropdown').addClass('js-dropdown-is-active');
        });

        $('.js-dropdown-close').on("click", function () {
            $('.js-dropdown-active-box').removeClass('js-dropdown-is-active');
            $('.js-dropdown').removeClass('js-dropdown-is-active');
        });

    });

    /* 8. Change menu background */
    $(document).on('mouseover', '.js-nav-bg-change', function () {
        $(this).addClass('js-nav-bg-active').siblings().removeClass('js-nav-bg-active')
    });

    /* 9. Magnific popup */
	
	$('.js-popup-ajax').magnificPopup({
        type: 'ajax'        
    });

    /* 10. Touch, no touch */
    var supports = (function () {
        var d = document.documentElement,
            c = "ontouchstart" in window || navigator.msMaxTouchPoints;
        if (c) {
            d.className += " js-touch";
            return {
                touch: true
            }
        } else {
            d.className += " js-no-touch";
            return {
                touch: false
            }
        }
    })();

    /* 11. Contact form */
    $("#send_form").on('submit', function () {
        var username = $("#user_name").val().trim();
        //        var first_name = $("#first_name").val().trim();
        //        var last_name = $("#last_name").val().trim();
        var email = $("#email").val().trim();
        var message = $("#message").val().trim();
        //        var subject = $("#subject").val().trim();
        const data = {
            'userName': username,
            'email': email,
            'query': message,
        }

        function validateCaptcha(data) {
            // e.preventDefault();
            grecaptcha.ready(function () {
                grecaptcha.execute('6LfqzaUZAAAAAAkJyFKXU9QoXAa0On8LcKCe3d6p', {
                    action: 'submit'
                }).then(function (token) {
                    data['token'] = token;
                    submitFeedback(data);
                }).catch((e) => console.log(e));
            });
        }

        validateCaptcha(data);

        function submitFeedback(data) {
            $.ajax({
                url: 'https://api.loop.qa/user/contact_us',
                type: 'POST',
                cache: false,
                data: data,
                dataType: 'html',
                beforeSend: function () {
                    $("#send").addClass("js-active");
                },
                success: function (datax) {
                    console.log(datax);
                    if (datax || datax.statusCode === 200) {
                        $("#m_sent").addClass("js-active");
                        $(".form-box").addClass("js-active");
                        setTimeout(function () {
                            $("#send").removeClass("js-active");
                            $("#send_form").trigger("reset");
                            $('.email-label').removeClass("js-active");
                        }, 2000);
                    } else {
                        $("#m_err").addClass("js-active");
                        $(".form-box").addClass("js-active");
                        setTimeout(function () {
                            $("#send").removeClass("js-active");
                        }, 2000);

                    }
                    $('.js-popup-close').click(function () {
                        $(this).parents('.js-popup-fade').removeClass("js-active");
                        $('.form-box').removeClass("js-active");
                        return false;
                    });

                    $(document).keydown(function (e) {
                        if (e.keyCode === 27) {
                            e.stopPropagation();
                            $('.js-popup-fade').removeClass("js-active");
                            $('.form-box').removeClass("js-active");
                        }
                    });

                    $('.js-popup-fade').click(function (e) {
                        if ($(e.target).closest('.js-popup').length == 0) {
                            $('.js-popup-fade').removeClass("js-active");
                            $('.form-box').removeClass("js-active");
                        }
                    });
                },
            })
        }
        return false;
    });
	
	
	/* 11B.	Platform form */
	 $("#plat_form").on('submit', function () {
        var username = $("#user_name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var location = $("#location").val().trim();
        var country = $("#country").val().trim();
        var fleet_size = $("#fleet_size").val().trim();
        var message = $("#message").val().trim();

        const data = {
            'userName': username,
            'email': email,
            'phone': phone,
            'location': location,
            'country': country,
            'fleet_size': fleet_size,
            'query': message,
        }

        function submitFeedback(data) {
            $.ajax({
                url: 'https://api.loop.qa/user/platform',
                type: 'POST',
                cache: false,
                data: data,
                dataType: 'html',
                beforeSend: function () {
                    $("#send").addClass("js-active");
                },
                success: function (datax) {
                    console.log(datax);
                    if (datax || datax.statusCode === 200) {
                        $("#m_sent").addClass("js-active");
                        $(".form-box").addClass("js-active");
                        setTimeout(function () {
                            $("#send").removeClass("js-active");
                            $("#send_form").trigger("reset");
                            $('.email-label').removeClass("js-active");
                        }, 2000);
                    } else {
                        $("#m_err").addClass("js-active");
                        $(".form-box").addClass("js-active");
                        setTimeout(function () {
                            $("#send").removeClass("js-active");
                        }, 2000);

                    }
                    $('.js-popup-close').click(function () {
                        $(this).parents('.js-popup-fade').removeClass("js-active");
                        $('.form-box').removeClass("js-active");
                        return false;
                    });

                    $(document).keydown(function (e) {
                        if (e.keyCode === 27) {
                            e.stopPropagation();
                            $('.js-popup-fade').removeClass("js-active");
                            $('.form-box').removeClass("js-active");
                        }
                    });

                    $('.js-popup-fade').click(function (e) {
                        if ($(e.target).closest('.js-popup').length == 0) {
                            $('.js-popup-fade').removeClass("js-active");
                            $('.form-box').removeClass("js-active");
                        }
                    });
                },
            })
        }
        return false;
    });

    $('#email').on('keyup', function () {
        var $this = $(this),
            val = $this.val();

        if (val.length >= 1) {
            $('.email-label').addClass("js-active");
        } else {
            $('.email-label').removeClass("js-active");
        }
    });

    /* 12. Marquee */
    $('.marquee').marquee({
        //duration in milliseconds of the marquee
        duration: 15000,
        //gap in pixels between the tickers
        gap: 50,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
    });

    $('.ar-marquee').marquee({
        //duration in milliseconds of the marquee
        duration: 15000,
        //gap in pixels between the tickers
        gap: 0,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'right',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
    });

    /* 13. Splitting */
    Splitting();

    /* 14. SplitLines */
    $('.anim-split-lines').each(function () {

        $(this).splitLines({
            tag: '<div class="animated-line-wrapper"><div class="animated-line-content">',
            keepHtml: true
        });

    });

});



(function($) {
    $(window).load(function () {
        // retrieved this line of code from http://dimsemenov.com/plugins/magnific-popup/documentation.html#api
        $.magnificPopup.open({
            items: {
                src: '#popup'
            },
            type: 'inline'

          // You may add options here, they're exactly the same as for $.fn.magnificPopup call
          // Note that some settings that rely on click event (like disableOn or midClick) will not work here
        }, 0);
    });
})(jQuery);