$( document ).ready(function() {
    if ($(window).width() >= 1086){
        $( "#menu-icon" ).hide();
        $( "#menu-icon-close" ).hide();
        $( "ul" ).show();
    }  
    if ($(window).width() <= 1086){	
        $( "#menu-icon" ).show();
        $( "ul" ).hide();
        $( "#menu-icon-close" ).hide();
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
        if ($(window).width() <= 1086){	
            $( "#menu-icon" ).show();
            $( "ul" ).hide();
            $( "#menu-icon-close" ).hide();
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
        if ($(window).width() >= 1086){	
            $( "#menu-icon" ).hide();
            $( "#menu-icon-close" ).hide();
            $( "ul" ).show();
        }  
    });
});