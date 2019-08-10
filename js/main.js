$(document).ready(function() {

    'use strict';  
                

    // -------------------------------------------------------------
    // CounterUp
    // -------------------------------------------------------------

    (function () {

        $('.counter').counterUp({
        delay: 10,
        time: 1000
        
        });

    }());


    // -------------------------------------------------------------
    //  Sticky Nav
    // -------------------------------------------------------------

    
    (function () {

        $(window).scroll(function() {
            var nav = $('.home-banner .navbar');
            var $this = $(this);

            if($this.scrollTop() > 735) {
                nav.addClass('sticky-nav animated fadeInDown');
            }
            else {
                nav.removeClass('sticky-nav animated fadeInDown');
            }
        });

    }()); 


    // -------------------------------------------------------------
    // MagnificPopup
    // -------------------------------------------------------------

    (function () {
        $('.gallery-content li a, .gallery-item a').magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
    }());


               
    // -------------------------------------------------------------
    //  Countdown
    // -------------------------------------------------------------

    (function () {

        $("#countdown").countdown({
            date: "29 mar 2017 12:00:00",
            format: "on"
        });
    
    }());

               
    // -------------------------------------------------------------
    //  GlDatePicker
    // -------------------------------------------------------------

    (function () {

        $('.mydate').glDatePicker({
            showAlways: true,
            selectedDate: new Date(2016, 8, 16),
            dowOffset: 3,
            selectableYears: [2016, 2017, 2018, 2019],
            specialDates: [
                {
                    date: new Date(2016, 8, 17),
                    data: { message: '' },
                    repeatMonth: true
                },
                {
                    date: new Date(2016, 8, 8),
                    data: { message: '' },
                    repeatYear: true
                },
                {
                    date: new Date(2016, 8, 13),
                    data: { message: '' },
                    repeatMonth: true
                },
            ],            
        });       

    }());


    // -------------------------------------------------------------
    //  Owl Carousel
    // -------------------------------------------------------------
    
    $(".home-slider").owlCarousel({
        items:1,
        nav:true,
        autoplay:true,
        dots:false,
        loop: true,
        autoplayHoverPause:true,
        navText: [
          "<i class='fa fa-angle-left '></i>",
          "<i class='fa fa-angle-right'></i>"
        ],          
                             
    }); 

    (function() {

        $(".testimonial-slider").owlCarousel({
            items:1,
            nav:true,
            autoplay:true,
            dots:true,
            loop: true,
            navText: false,
            autoplayHoverPause:true                                 
        });

        $(".sponsor-slider").owlCarousel({
            items:6,
            nav:true,
            autoplay:true,
            dots:false,
            loop: true,
            autoplayHoverPause:true,
            navText: [
              "<i class='fa fa-angle-left '></i>",
              "<i class='fa fa-angle-right'></i>"
            ],
            responsive: {
                0: {
                    items: 2,
                    slideBy:1
                },
                480: {
                    items: 3,
                    slideBy:1
                },
                768: {
                    items: 4,
                    slideBy:1
                },
                991: {
                    items: 6,
                    slideBy:1
                },
            }                                                         
        }); 

        $(".speaker-slider-one").owlCarousel({
            items:4,
            nav:true,
            autoplay:true,
            dots:false,
            loop: true,
            autoplayHoverPause:true,
            navText: [
              "<i class='fa fa-angle-left '></i>",
              "<i class='fa fa-angle-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                    slideBy:1
                },
                480: {
                    items: 2,
                    slideBy:1
                },
                768: {
                    items: 3,
                    slideBy:1
                },
                991: {
                    items: 4,
                    slideBy:1
                },
            }                           
                                 
        }); 

        $(".speaker-slider-two").owlCarousel({
            items:2,
            nav:true,
            autoplay:true,
            dots:false,
            loop: true,
            autoplayHoverPause:true,
            navText: [
              "<i class='fa fa-angle-left '></i>",
              "<i class='fa fa-angle-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                    slideBy:1
                },
                480: {
                    items: 1,
                    slideBy:1
                },
                768: {
                    items: 1,
                    slideBy:1
                },
                991: {
                    items: 2,
                    slideBy:1
                },
            }                           
                                 
        }); 

        $(".gallery-slider").owlCarousel({
            items:1,
            nav:true,
            autoplay:true,
            dots:false,
            loop: true,
            autoplayHoverPause:true,
            navText: [
              "<i class='fa fa-angle-left '></i>",
              "<i class='fa fa-angle-right'></i>"
            ],              
                                 
        });

        $(".testimonial-slider-two").owlCarousel({
            items:3,
            nav:true,
            autoplay:true,
            dots:true,
            navText: false,
            loop: true,
            autoplayHoverPause:true,
            responsive: {
                0: {
                    items: 1,
                    slideBy:1
                },
                480: {
                    items: 1,
                    slideBy:1
                },
                768: {
                    items: 2,
                    slideBy:1
                },
                991: {
                    items: 2,
                    slideBy:1
                },
            }                              
        }); 

        $(".schedule-slider").owlCarousel({
            items:5,
            nav:true,
            autoplay:true,
            dots:true,
            navText: false,
            loop: true,
            autoplayHoverPause:true,
            responsive: {
                0: {
                    items: 1,
                    slideBy:1
                },
                480: {
                    items: 1,
                    slideBy:1
                },
                768: {
                    items: 2,
                    slideBy:1
                },
                991: {
                    items: 3,
                    slideBy:1
                },
                1299: {
                    items: 4,
                    slideBy:1
                },
                1560: {
                    items: 5,
                    slideBy:1
                },
            }                               
        });             

    }());


    // -------------------------------------------------------------
    // Accordion
    // -------------------------------------------------------------

        (function () {  
            $('.collapse').on('show.bs.collapse', function() {
                var id = $(this).attr('id');
                $('a[href="#' + id + '"]').closest('.panel').addClass('active');
            });

            $('.collapse').on('hide.bs.collapse', function() {
                var id = $(this).attr('id');
                $('a[href="#' + id + '"]').closest('.panel').removeClass('active');
            });
        }());    


    // -------------------------------------------------------------
    //  Cubeportfolio
    // -------------------------------------------------------------

    
    (function () {
        
        $('#portfolio-item').cubeportfolio({
            filters: '#portfolio-menu',
            loadMore: '#portfolio-menu',
            animationType: '3dflip',
            gapHorizontal: 30,
            gapVertical: 30,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 668,
                cols: 2
            }, {
                width: 480,
                cols: 1
            },],                      

            });

    }()); 

    

    // -------------------------------------------------------------
    //  Dropdown Select
    // -------------------------------------------------------------

   (function() {

        $('.language-dropdown').on('click', '.language-change a', function(ev) {
            if ("#" === $(this).attr('href')) {
                ev.preventDefault();
                var parent = $(this).parents('.language-dropdown');
                parent.find('.change-text').html($(this).html());
            }
        });

        $('.category-dropdown').on('click', '.category-change a', function(ev) {
            if ("#" === $(this).attr('href')) {
                ev.preventDefault();
                var parent = $(this).parents('.category-dropdown');
                parent.find('.change-text').html($(this).html());
            }
        });

    }());  



}); // Main js end


