// 讓導覽列往下捲之後定在最上方的程式碼
$(function(){
   $(window).load(function(){
      $(window).bind('scroll resize', function(){
         var $this_Top=$(this).scrollTop();

         //當高度大於150時，Top Bar fixed at top 
         if($this_Top < 150){
            $('#Top-Bar').css('position','static')
                         .css('top', 'auto' );
         }else{
            $('#Top-Bar').css('position','fixed')
                         .css('top', 0 );
         }
      }).scroll();
   });
});
