// 時間軸主軸
var slider = 2;

// function 1
$(function() {
   $('#explore').bind('click', function() {
      $('#credits').hide();
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

   $('#credits a').live('click', function() {
      $('#credits').slideToggle(500);
      return false;
   });

   $('#credits-and-info').live('click', function() {
      $credits = $('#credits');
      if($credits.is(':visible')) {
         $credits.slideToggle(500);
      } else {
         $credits.show();
         $('body').animate({
            scrollTop: $(document).scrollTop() + $credits.height() + 20
         }, 1000);
      }
      return false;
   });
});

// function 2
function loadPage(href) {
   $info = $('#info');
   if($info.is(':visible')) {
      $info.slideUp(500, function() {
         return loadPageContent(href);
      });
   } else {
      return loadPageContent(href);
   }
   return false;
}

// function 3
function loadPageContent(href) {
   $info = $('#info');
   $info.removeClass('loaded').hide();
   $info.html('<p id="loading"><img src="image/loading.gif" alt="Loading..."></p>').slideDown(500);
   $.get(href, function(data) {
      $info.html(data).addClass('loaded');
   });
   $('body').animate({scrollTop: 0}, 1000);
   return false;
}

// function 4
function closeDetail() {
   $info.slideUp();
}

// function 5
function switchTab(anchor) {
   $('#info a.active').removeClass('active');
   var tab = $(anchor).addClass('active').attr('data-tab');
   $('#tabs div:visible').fadeOut(500, function() {
      $(this).removeClass('active');
      $('#tab-'+ tab).fadeIn(500, function() {
         $(this).addClass('active');
      });
   });
   return false;
}

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

// function 7
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
