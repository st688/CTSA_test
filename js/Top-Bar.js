// 讓導覽列往下捲之後定在最上方的程式碼
$(function(){
   $(window).load(function(){
      //$(window).bind('scroll resize', function(){
         //當高度大於150時，Top Bar fixed at top 
         if($(this).scrollTop() < 150){
            $('#Top-Bar').css('position','static')
                         .css('top', 'auto' );
         }else{
            $('#Top-Bar').css('position','fixed')
                         .css('top', 0 );
         }
      //});
   });
});
