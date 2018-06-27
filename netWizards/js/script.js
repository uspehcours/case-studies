$(document).ready(function() {
    // $('img.svg').each(function(){
    //     var img = $(this);
    //     var imgID = img.attr('id');
    //     var imgClass = img.attr('class');
    //     var imgURL = img.attr('src');
    //     console.log(imgURL)

    //     $.get(imgURL, function(data) {
    //         var $svg = $(data).find('svg');

    //         if(typeof imgID !== 'undefined') {
    //             $svg = $svg.attr('id', imgID);
    //         }
    //         if(typeof imgClass !== 'undefined') {
    //             $svg = $svg.attr('class', imgClass+' replaced-svg');
    //         }

    //         $svg = $svg.removeAttr('xmlns:a');

    //         if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
    //             $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    //         }

    //         img.after($svg);

    //     }, 'xml');

    // });

    $(".logoSlider").owlCarousel({
        items: 5,
        margin: 30,
		dots: false,
		nav: true,
		loop: true,
        navContainer: ".logoNav",
        navElement: "span",
        navText: ['<span class="icon-nav_prev"></span>', '<span class="icon-nav_next"></span>'],
        responsive:{
            992:{
                items: 5
            },
            768:{
                items: 4
            }

        }
    });

    $(".aboutSlides").owlCarousel({
		items: 1,
        dots: true,
        margin: 30,
		nav: false,
        dotsContainer: ".aboutDots",
        mouseDrag: false
    });
    
    $(".siteSlider").owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true,
        navContainer: ".siteNav",
        navElement: "span",
        navText: ['<span class="icon-nav_prev"></span>', '<span class="icon-nav_next"></span>'],
        animateIn: "fadeIn",
        animateOut: "fadeOut"
    });

    var scrollRocket = function() {
        if (!$('.img2').hasClass('animation')) {
            var blockScrollTop = $('.advTempl1').offset().top,
                windowScrollTop = $(window).scrollTop(),
                scroll = blockScrollTop - windowScrollTop,
                windowHeight = $(window).outerHeight(),
                blockHeight = $('.advTempl1').outerHeight(),
                windowHalf = windowHeight / 2,
                blockHalf = blockHeight / 2,
                windowScroll = windowScrollTop + windowHalf,
                blockScroll = blockScrollTop + blockHalf,
                isAdded = false,
                windowTop = windowHeight * 0.25,
                windowBtm = windowHeight * 0.75

            if (windowScroll > blockScrollTop + windowTop && windowScroll < blockScrollTop + windowBtm) {
                $('.img2').addClass('animation');
                $(window).off('scroll', scrollRocket)
            }
        }
    };

    $(window).on('scroll', scrollRocket);

    if ($(window).width() >= 768) {
       $('.warn').mouseover(function() {
            $('.msg').stop().fadeIn()
        });

        $('.warn').mouseout(function() {
            $('.msg').stop().fadeOut()
        }); 
    }
    


    var ua = detect.parse(navigator.userAgent);
    $("html").addClass(ua.browser.family)

   
    var overlay = $('#overlay');
    var openMod = $('.openMod');
    var close = $('.close');
    var blockMod = $('.blockMod');

    function modalEvent() {
        overlay.fadeIn(500);
        $(".blockMod#" + $(this).attr('data-modal')).addClass("open").fadeIn(500);
        $("body").addClass("bodyModal");
        $(".modalsScroll").addClass("open");
    }

    openMod.on("click", modalEvent);

    close.click(function () {
        overlay.fadeOut(500);
        $(".blockMod.open").fadeOut(500, function () {
            $(this).removeClass("open");
            $("body").removeClass("bodyModal");
            $(".modalsScroll").removeClass("open");
        });
    });
    var onModalClose = function () {
        $(this).fadeOut(500);
        $(".blockMod.open").fadeOut(500, function () {
            $(this).removeClass("open");
            $("body").removeClass("bodyModal");
            $(".modalsScroll").removeClass("open");
        });
    };

    overlay.click(onModalClose);
    
});

