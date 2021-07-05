$(document).ready(function (){

    $('.fa-bars').click(function () {
        $('.overlay').fadeToggle();
        $('.overlay-menu').fadeToggle();
        $('.close-icon').fadeToggle();
        $('.fa-bars').fadeOut();
        })

    $('.close-icon').click(function () {
        $('.overlay').fadeToggle();
        $('.overlay-menu').fadeOut();
        $('.close-icon').fadeOut();
        $('.fa-bars').fadeToggle();
        })

        $('.overlay-menu ul li a').click(function() {
            $('.overlay').fadeToggle();
            $('.overlay-menu').fadeToggle();
            $('.close-icon').fadeToggle();
            $('.fa-bars').fadeToggle();
        });


        $(window).scroll(function(){
            let it = $(window).scrollTop();

            if( it > 50){
                $('header .navbar').css({
                    background:'white',
                    height: "80px" ,
                })
                $('.icon-top').fadeIn();
            
            }else{
            
                $('header .navbar').css('background', 'transparent');
                $('.icon-top').fadeOut();
            }
            
        });




    $('.faq-color').click(function(){
        $('.faq-color').removeClass('active');
        $(this).addClass('active');
    });
    $('.faq-text .item').first().show();
    $('.faq-color').click(function(){
    let indexfaqcolor = $(this).index();
    $('.faq-text .item').hide();
    $('.faq-text .item').eq(indexfaqcolor).show();
    });


    $('.click1').click(function(){
        $('.faq-text ul .click1').toggleClass('style-li');
        $('.faq-text ul .click1  .icon-minus').toggle();
        $('.faq-text ul .click1  .icon-plus').toggle();
        $('.faq-text ul .click1 +  .ul-text').slideToggle();
    });
    $('.click2').click(function(){
        $('.faq-text ul li.click2').toggleClass('style-li');
        $('.faq-text ul li.click2 .icon-minus').toggle();
        $('.faq-text ul li.click2 .icon-plus').toggle();
        $('.faq-text ul li.click2 + .ul-text').slideToggle();
    });    
    $('.click3').click(function(){
        $('.faq-text ul li.click3').toggleClass('style-li');
        $('.faq-text ul li.click3 .icon-minus').toggle();
        $('.faq-text ul li.click3 .icon-plus').toggle();
        $('.faq-text ul li.click3 + .ul-text').slideToggle();
    });
    $('.click4').click(function(){
        $('.faq-text ul li.click4').toggleClass('style-li');
        $('.faq-text ul li.click4 .icon-minus').toggle();
        $('.faq-text ul li.click4 .icon-plus').toggle();
        $('.faq-text ul li.click4 + .ul-text').slideToggle();
    });
    $('.click5').click(function(){
        $('.faq-text ul li.click5').toggleClass('style-li');
        $('.faq-text ul li.click5 .icon-minus').toggle();
        $('.faq-text ul li.click5 .icon-plus').toggle();
        $('.faq-text ul li.click5 + .ul-text').slideToggle();
    });
    $('.click6').click(function(){
        $('.faq-text ul li.click6').toggleClass('style-li');
        $('.faq-text ul li.click6 .icon-minus').toggle();
        $('.faq-text ul li.click6 .icon-plus').toggle();
        $('.faq-text ul li.click6 + .ul-text').slideToggle();
    });


})

/* smooth scroll */
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 700
});

/* fit text */
jQuery("#responsive_headline").fitText();














