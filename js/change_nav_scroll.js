$(document).ready(function() {
    $("#menutoggle").click(function() {
        $('.xs-menu').toggleClass('displaynone');
    });	
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    }); 
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });		
    $('ul li').click(function(e) {
    });
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".navbar").addClass("navbar-change");
        $(".logo").addClass("navbar-text-change");
        $(".nav-link").addClass("navbar-text-change");
        $("ul.color-bg").addClass("head-change-color");
        $("nav.nav-links").removeClass("mobile-start");
        $(".nav-button").addClass("nav-button-change");
        $(".nav-link").removeClass("nav-link-hov-ch");
    } else {
        $(".navbar").removeClass("navbar-change");
        $("ul.color-bg").removeClass("head-change-color");
        $("nav.nav-links").addClass("mobile-start");
        $(".logo").removeClass("navbar-text-change");
        $(".nav-link").removeClass("navbar-text-change");
        $(".nav-button").removeClass("nav-button-change");
        $(".nav-link").addClass("nav-link-hov-ch");
    }
});