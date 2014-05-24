// 時間軸樣式
var time_line_style = 0;
// 當前年份
var current_year = 2014;

// 建立年份時間軸
function setTimeLine(v){
   // 該年代被選擇
   $(".Dec a").css('color','blue');
   $("#Dec" + v + " a").css('color','red');
   var html_stack = "<center><div id='Slider-Container'>"
                  + "<center><div id='Slider-Background'></div></center>"
                  + "<div id='Slider'></div>"
                  + "</div><center>\n"
                  + "<ul id='Yr-Container'><center>";
   var mi, ma, dec;
   mi = $("#Dec"+ v).attr("mi");
   ma = $("#Dec"+ v).attr("ma");

   dec = v * 10;

   for(var i = 0; i < 10; ++i){
      html_stack += "<li class='Yr'>";
      if( (i >= mi) && (i <= ma) ){
         html_stack += "<a href=\"#\" onclick=\"return triggerYearChosen(" + (dec + i) + ");\">" // 暫時用，等改拖曳之後刪除
                     + (dec + i) + "</a>";
      }
      html_stack += "</li>\n";
   }
   html_stack += "<li class='Yr'>";
   if( (time_line_style == 1) && (ma == 9) ){
      html_stack += (dec + 10);
   }
   html_stack += "</li>\n</center></ul>";
   $('#Time-Line-Yr').html(html_stack);

   // 不要回到頂端
   return false;
}

// 生成時間軸
function initTimeLine(page){
   var v;
   // 給定參數page，從data/page下面找time_line檔案
   $.get('data/'+page+'/time_line', function(data) {
      // 預備輸出的html
      var html_stack = "";
      current_year    = parseInt($('n',data).text()); // 取得當前年份
      time_line_style = parseInt($('s',data).text()); // 取得樣式

      // 建立年代選單
      html_stack += "<div id='Time-Line-Dec'><ul id='Dec-Container'><center>\n"
      $('dec',data).each(function(){
         v  = parseInt($(this).find('v').text()); 
         mi = parseInt($(this).find('i').text()); // min
         ma = parseInt($(this).find('a').text()); // max

         // 點擊之後建立年份時間軸
         html_stack += "<li id='Dec"+ v + "' mi=" + mi + " ma=" + ma + " class='Dec'>" 
                     + "<a href=\"#\" onclick=\"return setTimeLine(" + v + ");\" >"
                     + (v*10) + "-" + ((v+1)*10) + "</a></li>\n";
      });

      html_stack += "</center></ul></div>\n<div id='Time-Line-Yr'></div>";
      $('#Time-Line').html(html_stack);

      // 初始化年份時間軸
      setTimeLine(Math.floor(current_year / 10));
   });

   // 發送「當前年份被選擇」事件
   triggerYearChosen(current_year);
}

// 發送「年份被選擇」事件
function triggerYearChosen(yr){
   $("#Content").trigger("e_YearChosen", yr);
   // 不要回到頂端
   return false;
}
