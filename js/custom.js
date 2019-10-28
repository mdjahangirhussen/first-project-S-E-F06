$(document).ready(function () {
    "use strict";

    /*============================================
    	* Author		: # name#
    	* Template Name : name | HTML Template
    	* version		:1.0
    	
    ==============================================
    *========== TABLE OF CONTENTS ================

        0.1  Reveloution Slider
        0.2  CounterUp Js
        0.3  Fixed Top Navbar Js
        0.4  scrolltop js
        0.5  team-carousel js
        0.6  news-carousel js
        0.7  Dropdown on hover Js
        0.8  Dropdown Js 
        0.9  WoW Js
        010  Preloader Js
        011  Mobile_dropdown_menu Js
        012  Mobile_dropdown_ click Js
        013 NiceScroll Js
     

    ========================================*/
    /*--------------------------------
	 	1. Reveloution Slider
	----------------------------------*/
    var tpj = jQuery;

    var revapi1078;
    tpj(document).ready(function () {
        if (tpj("#banner_slider").revolution == undefined) {
            revslider_showDoubleJqueryError("#banner_slider");
        } else {
            revapi1078 = tpj("#banner_slider").show().revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                dottedOverlay: "yes",
                delay: 5000,
                navigation: {
                    arrows: {
                        style: "gyges",
                        enable: true,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 60,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 60,
                            v_offset: 0
                        }
                    },
                },

                responsiveLevels: [1170, 940, 720, 480],
                visibilityLevels: [700, 600, 550, 500],
                gridwidth: [1170, 940, 720, 480],
                gridheight: [700, 600, 550, 500],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 2000,
                    levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
                    type: "mouse",
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
    });
    

    
    //-------- 0.3 Fixed Top Navbar Js --------
    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 180) sticky.addClass('fixed')
        else sticky.removeClass('fixed');
    });
    
    
    //-------- 0.4 scrolltop js --------
     $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    $('.scrolltop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // -------- 0.5 team-carousel --------
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 32,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ['<div class="prev"><i class="fas fa-chevron-left"></i></div>', 
                  '<div class="next"><i class="fas fa-chevron-right"></i></div>'],
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            480: {
                items: 2,
                loop: true
            },
            768: {
                items: 3,
                loop: true
            },
            1000: {
                items: 4,
                loop: true,
            }
        }
    });
    
    // -------- 0.6 news-carousel js --------
    $('.news-carousel').owlCarousel({
        loop: true,
        margin: 32,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ['<div class="prev"><i class="fas fa-chevron-left"></i></div>', 
                  '<div class="next"><i class="fas fa-chevron-right"></i></div>'],
        responsive: {
		        0:{
		            items:1,
		            autoWidth: false
		        },
		        380:{
		            items:1,
		            autoWidth: false
		        },
		        540:{
		            items:2,
		            autoWidth: false
		        },
		        740:{
		            items:2,
		            autoWidth: false
		        },
		        1000:{
		            items:3,
		            autoWidth: false
		        }
		    }
    });
    
    
    
        //-------- 0.2 counterUp Js --------
      $('.counter').counterUp({
    delay: 10,
    time: 1000
});
    
    
    //-------- 0.7 Dropdown on hover Js --------

    $(".dropdown").hover(
        function () {
            $(this).find('.d_down_menu , .s_down_menu, .sh_down_menu,.bd_down_menu').stop(true, false, true).slideDown();
        },
        function () {
            $(this).find('.d_down_menu ,.s_down_menu, .sh_down_menu,.bd_down_menu').stop(true, false, true).slideUp(100);
        });

    //-------- 0.8 Dropdown Js --------

    $('.main_menu ul li a ').click(function () {
        $('.main_menu ul li a ').removeClass("active");
        $(this).addClass("active");
    });

    $('.d_down_menu li a').click(function () {
        $('.d_down_menu li a').removeClass("active");
        $('.about').addClass("active");
    });
    $('.s_down_menu li a').click(function () {
        $('.s_down_menu li a').removeClass("active");
        $('.service').addClass("active");
    });

    $('.sh_down_menu li a').click(function () {
        $('.sh_down_menu li a').removeClass("active");
        $('.shop').addClass("active");
    });
    $('.bd_down_menu li a').click(function () {
        $('.bd_down_menu li a').removeClass("active");
        $('.blog').addClass("active");
    });

    //-------- 0.9 WoW Js --------
    new WOW().init({});

});
//-------- 0.10 Preloader Js --------
$(window).on("load", function () {
    $(".preloader").delay(200).fadeOut(500);
});

//-------- 0.11 Mobile_dropdown_menu Js --------
$('.d_down_btn').click(function () {
    $('.md_drop_menu').slideToggle();
});
$('.sd_down_btn').click(function () {
    $('.sd_menu').slideToggle();
});
$('.bd_down_btn').click(function () {
    $('.b_down_menu').slideToggle();
});

//-------- 0.12  Mobile_dropdown_ click Js --------
$('.about,.service,.shop,.blog').click(function () {
    $('.about,.service,.shop,.blog').off("click", flash)
});

//--------  0.13 NiceScroll Js --------
$(".custom_scroll").niceScroll({
    autohidemode: false,
});