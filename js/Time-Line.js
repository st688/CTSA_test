// 建立雙時間軸：年代、年份
function setTimeLine(page){
   // 給定參數page，從data/page下面找time_line檔案
   $.get('data/'+page+'/time_line', function(data) {
      
      
   });
}






// 時間軸主軸
var slider = 2;

// function 1
$(function() {
   $('#explore').bind('click', function() {
      $('#container')
         .css({'position': 'absolute',
               'left': ($(document).width() - 970) / 2,
               'top': 0})
         .animate({'left': '-970px'}, 1000, function() {
            $(this).removeClass('home').html('<p id="loading"><img src="image/loading.gif" alt="Loading..."></p>')
                   .css({'position': 'relative',
                         'left': 0}).hide();
            $.get('page/timeline.html', function(data) {
               $('#container').html(data).fadeIn(500);
               $('#slider-container').slider({
                  value: 1,
                  min: 1,
                  max: 3,
                  step: 1,
                  slide: function(event, ui) {slideContent(ui.value);}
               });
            });
         });
      return false; /* do not add hash at the query */
   });

});

var thisHalf = 1;

// function 6
function topslider(variant) {
   if(variant == -1) {
      if(thisHalf > 1) {
         slideContent(thisHalf - 1);
      }
   } else if(variant == 1) {
      if(thisHalf < 3) {
         slideContent(thisHalf + 1);
      }
   }
   return false;
}

// Silde Comtent
function slideContent(half) {
   $info = $('#info');
   if($info.is(':visible')) {
      $info.hide();
   }
   if($('#slider-container').slider('value') != half) {
      $('#slider-container').slider('value', half);
   }
      
   $('#timeline-half'+ thisHalf).fadeOut(500);
   $('#timeline-half'+ half).fadeIn(500);
   $('.half').slideUp(1000);
   $('#half'+ half).slideDown(1000);

   thisHalf = half;
}
