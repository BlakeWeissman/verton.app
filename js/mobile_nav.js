$( document ).ready(function() {
    if ($(window).width() >= 1233){
        $( "#menu-icon" ).hide();
        $( "#menu-icon-close" ).hide();
        $( "ul" ).show();
        $( "#main-but" ).show();
    }  
    if ($(window).width() <= 1233){	
        $( "#menu-icon" ).show();
        $( "ul" ).hide();
        $( "#menu-icon-close" ).hide();
        $( "#main-but" ).hide();
        $( "#menu-icon" ).click(function() {
            $( "ul" ).show();
            $( "#menu-icon" ).hide();
            $( "#menu-icon-close" ).show();
        });
        $('#menu-icon-close').click(function() {
        $( "ul" ).hide();
        $( "#menu-icon" ).show();
        $( "#menu-icon-close" ).hide();
        });
    }
    $(window).resize(function(){
        if ($(window).width() <= 1233){	
            $( "#menu-icon" ).show();
            $( "ul" ).hide();
            $( "#menu-icon-close" ).hide();
        $( "#main-but" ).hide();
            $( "#menu-icon" ).click(function() {
            $( "ul" ).show();
            $( "#menu-icon" ).hide();
            $( "#menu-icon-close" ).show();
            });
            $('#menu-icon-close').click(function() {
            $( "ul" ).hide();
            $( "#menu-icon" ).show();
            $( "#menu-icon-close" ).hide();
            $( "#main-but" ).hide();
            });
        }	
        if ($(window).width() >= 1233){	
            $( "#menu-icon" ).hide();
            $( "#menu-icon-close" ).hide();
            $( "ul" ).show();
            $( "#main-but" ).show();
        }  
    });
});