(function($){
	"use strict";

/*
 * ----------------------------------------------------------------------------------------
 *  CHANGE MENU BACKGROUND JS
 * ----------------------------------------------------------------------------------------
 */
        var headerBottom = $(window);
        var headTopmenu = $('.main-header');

       headerBottom.on('scroll', function () {
            if (headerBottom.scrollTop() > 200) {
             headTopmenu.addClass('menu-down');
            } else {
               headTopmenu.removeClass('menu-down');
            }
        });
       
    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 70
    });
        $('.portfolio-inner').mixItUp();


/*
 * ----------------------------------------------------------------------------------------
 *  Smoth Scroll
 * ----------------------------------------------------------------------------------------
 */


        $('a.smoth-scroll').on("click", function (e) {
            var menu = $(this);
            $('html, body').stop().animate({
                scrollTop: $(menu.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });


/*
 * ----------------------------------------------------------------------------------------
 *  Progress Bar
 * ----------------------------------------------------------------------------------------
 */
    $('#html').LineProgressbar({
        percentage: 97,

    });
    $('#php').LineProgressbar({
        percentage: 83,

    });
    $('#bootstrap').LineProgressbar({
        percentage: 91,

    });
    $('#seo').LineProgressbar({
        percentage: 88,

    });
    $('#illustrator').LineProgressbar({
        percentage: 77,

    }); 
       $('#graphics').LineProgressbar({
        percentage: 86,

    }); 

        /*
         * ----------------------------------------------------------------------------------------
         *  WORK JS
         * ----------------------------------------------------------------------------------------
         */

        $('.portfo-in').mixItUp();


        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */


        var magnifPopup = function () {
            $('.image-pop').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        // Call the functions 
        magnifPopup();
/*
 * ----------------------------------------------------------------------------------------
 *  Counter
 * ----------------------------------------------------------------------------------------
 */

    $('.counter').counterUp({
      delay: 10,
      time: 800
    });
/*
 * ----------------------------------------------------------------------------------------
 *  Testimoinal
 * ----------------------------------------------------------------------------------------
 */
      $("#testimonial-slider").owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 800,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: true,
      singleItem: true,
      dots: true,
      loop: true,
      responsive:{
        0:{
          items:1
        },
        767:{
          items:1
        },
        1000:{
          items:2
        }
      }
    });

/*
 * ----------------------------------------------------------------------------------------
 *  Clients
 * ----------------------------------------------------------------------------------------
 */

  $("#client-caro").owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 800,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: true,
      singleItem: true,
      dots:false,
      loop: true,
      responsive:{
        0:{
          items:2
        },
        380:{
          items:3
        },
        680:{
          items:4
        },
        1000:{
          items:6
        }
      }
    });

}(jQuery));

/*
 * ----------------------------------------------------------------------------------------
 * Preloader
 * ----------------------------------------------------------------------------------------
 */
    jQuery(window).on('load',function(){


            $('.preloader').fadeOut(200);

        
    });