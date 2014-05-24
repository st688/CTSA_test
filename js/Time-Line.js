// 時間軸樣式
var time_line_style = 0;
// 當前年份
var current_year = 2014;
// 年份最小值
var year_min = 0;
// 年份最大值
var year_max = 9;

// 建立年份時間軸
function setTimeLine(v){
   // 該年代被選擇
   $(".Dec a").css('color','blue');
   $("#Dec" + v + " a").css('color','red');

   var html_stack = "<center><div id='Slider-Container'>"
                  + "<center><div id='Slider-Background'></div></center>"
                  + "<a href=\"#\" onmousedown=\"return fMouseDown();\"><div id='Slider'></div>"
                  + "</div><center>\n"
                  + "<ul id='Yr-Container'><center>";
   
   year_min = $("#Dec"+ v).attr("mi");
   year_max = $("#Dec"+ v).attr("ma");

   var dec = v * 10;

   for(var i = 0; i < 10; ++i){
      html_stack += "<li class='Yr'>";
      if( (i >= year_min) && (i <= year_max) ){
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
         v        = parseInt($(this).find('v').text()); 
         year_min = parseInt($(this).find('i').text()); // min
         year_max = parseInt($(this).find('a').text()); // max

         // 點擊之後建立年份時間軸
         html_stack += "<li id='Dec"+ v + "' mi=" + year_min + " ma=" + year_max + " class='Dec'>" 
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

// 拖曳處理：
var slider_x        = 0; // 拖曳起始的x
var clientX_down    = 0; // 滑鼠按下時的x
var dx_feasible_min = 0; // 最左可以拉到哪裡
var dx_feasible_max = 0; // 最右可以拉到哪裡

// 滑鼠按下
function fMouseDown(e){
   document.onmousemove = fMouseMove;
   document.onmouseup   = fMouseUp;
   clientX_down         = e.clientX;
   slider_x             = $("#Slider").attr('left');
   switch( time_line_style  ){
      case 0:
         dx_feasible_min = $("#Slider-Background").getBoundingClientRect().left
                         - $("#Slider").getBoundingClientRect().left  * 0.5
                         - $("#Slider").getBoundingClientRect().right * 0.5;
         dx_feasible_max = $("#Slider-Background").getBoundingClientRect().left
                         - $("#Slider").getBoundingClientRect().left  * 0.5
                         - $("#Slider").getBoundingClientRect().right * 0.5;
         break;
      case 1:
         dx_feasible_min = $("#Slider-Background").getBoundingClientRect().left
                         - $("#Slider").getBoundingClientRect().left;
         dx_feasible_max = $("#Slider-Background").getBoundingClientRect().right
                         - $("#Slider").getBoundingClientRect().right;
         break;
   }
   return false;
}

// 滑鼠移動
function fMouseMove(e){
   var dx = e.clientX - clientX_down;
   if( dx < dx_feasible_min ){
      dx = dx_feasible_min;
   }
   if( dx > dx_feasible_max ){
      dx = dx_feasible_max;
   }
   $("#Slider").css('left', slider_x + dx);
   return false;
}

// 滑鼠放開
function fMouseUp(e){
   document.onmousemove = null;
   document.onmouseup   = null;
   triggerYearChosen(current_year);
   return false;
}
