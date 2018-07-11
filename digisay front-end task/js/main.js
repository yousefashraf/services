jQuery(document).ready(function($) {
    $(window).scroll(function() {
        $(".slideright").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("animateright");
            }
        });
        $(".slideleft").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("animateleft");
                $(this).css('visibility','visible');
            }
        });
        
//        $(".slideflash").each(function(){
//            var pos = $(this).offset().top;
//
//            var winTop = $(window).scrollTop();
//            if (pos < winTop + 600) {
//                $(this).addClass("animateflash");
//            }
//        });
//        $(".slidezoom").each(function(){
//            var pos = $(this).offset().top;
//
//            var winTop = $(window).scrollTop();
//            if (pos < winTop + 600) {
//                $(this).addClass("animatezoom");
//            }
//        });
    });
});
