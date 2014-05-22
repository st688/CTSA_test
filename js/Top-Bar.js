// 讓導覽列往下捲之後定在最上方的程式碼
$(function(){
   $(window).bind('scroll', function(){
      //當高度大於150時，Top Bar fixed at top 
      if($(this).scrollTop() < 150){
         $('#Top-Bar').css('position','static')
                      .css('top', 'auto' );
         $('#Top-Bar-Fix').css('display','none');
      }else{
         $('#Top-Bar').css('position','fixed')
                      .css('top', 0 );
         $('#Top-Bar-Fix').css('display','block');
      }
   });
});
