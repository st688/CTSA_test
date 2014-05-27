// 時間軸樣式
var time_line_style = 0;
// 當前年份
var current_year = 2014;
// 年份最小值
var year_min = 0;
// 年份最大值
var year_max = 9;

// 建立年份時間軸
function setTimeLine(yr){
   // 該年代被選擇
   var v = Math.floor(yr/10); // 十位數以上
   $(".Dec a").css('color','blue');
   $("#Dec" + v + " a").css('color','red');

   var html_stack = "<center><div id='Slider-Container'>"
                  + "<center><div id='Slider-Background'></div></center>"
                  + "<a href=\"#\" onmousedown=\"fMouseDown(event);\" onclick=\"return false\"><div id='Slider'></div></a>"
                  + "</div><center>\n"
                  + "<ul id='Yr-Container'><center>";
   
   year_min = $("#Dec"+ v).attr("mi");
   year_max = $("#Dec"+ v).attr("ma");

   var dec = v * 10;

   for(var i = 0; i < 10; ++i){
      html_stack += "<li class='Yr'>";
      if( ( (i >= year_min) && (i <= year_max) ) || 
          ( (time_line_style == 1) && ((i - 1) == year_max) ) ){
         html_stack += (dec + i);
      }
      html_stack += "</li>\n";
   }
   html_stack += "<li class='Yr'>";
   if( (time_line_style == 1) && (year_max == 9) ){
      html_stack += (dec + 10);
   }
   html_stack += "</li>\n</center></ul>";
   $('#Time-Line-Yr').html(html_stack);

   // 更新長度參數
   width_bg  = $("#Slider-Background").width();
   width_yr  = $(".Yr").width();

   var n = Math.max(Math.min(yr % 10, year_max),year_min); // 可行之個位數，設定產生之軸用
   // 改變 Slider 外型（可能的話再想辦法避免直接把 css 參數打在裡面）
   switch( time_line_style ){
      case 0:
            $("#Slider").css('width', 30 )
                        .css('left',  n * width_yr );
         break;
      case 1:
            $("#Slider").css('width', width_yr )
                        .css('left',  15 + n * width_yr );
         break;
   }
   // 更新長度參數
   width_sl  = $("#Slider").width();

   current_year = dec + n;

   // 發送「當前年份被選擇」事件
   triggerYearChosen(current_year);

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
                     + "<a href=\"#\" onclick=\"return setTimeLine(" + (v * 10 + 9) + ");\" >"
                     + (v*10) + "-" + ((v+1)*10) + "</a></li>\n";
      });

      html_stack += "</center></ul></div>\n<div id='Time-Line-Yr'></div>";
      $('#Time-Line').html(html_stack);

      // 初始化年份時間軸
      setTimeLine(current_year);
   });
}

// 發送「年份被選擇」事件
function triggerYearChosen(yr){
   $("#Content").trigger("e_YearChosen", yr);
   // 不要回到頂端
   return false;
}

// 拖曳處理：
var slider_left     = 0; // 拖曳起始的x
var clientX_down    = 0; // 滑鼠按下時的x
var dx_feasible_min = 0; // 最左可以拉到哪裡
var dx_feasible_max = 0; // 最右可以拉到哪裡

var width_sl = 0; // Slider 寬度   
var width_bg = 0; // Slider Background 寬度
var width_yr = 0; // Yr 寬度

// 滑鼠按下
function fMouseDown(e){
   var offset_sl = $("#Slider").offset();            // Slider 絕對座標
   var offset_bg = $("#Slider-Background").offset(); // Slider Background絕對座標
   clientX_down  = e.clientX;
   slider_left   = $("#Slider").position().left;

   switch( time_line_style ){
      case 0:
         dx_feasible_min = offset_bg.left            - offset_sl.left - width_sl/2 
                         + year_min * width_yr;
         dx_feasible_max = offset_bg.left + width_bg - offset_sl.left - width_sl/2
                         - (9-year_max) * width_yr;
         break;
      case 1:
         dx_feasible_min = offset_bg.left            - offset_sl.left 
                         + year_min * width_yr;
         dx_feasible_max = offset_bg.left + width_bg - offset_sl.left - width_sl 
                         - (9-year_max) * width_yr;
         break;
   }

   document.onmousemove = fMouseMove;
   document.onmouseup   = fMouseUp;
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
   $("#Slider").css('left', slider_left + dx);
   return false;
}

// 滑鼠放開
function fMouseUp(e){
   var now_left  = $("#Slider").position().left;
   var min_left  = 0;
   switch( time_line_style ){
      case 0:
         min_left = 0;
         break;
      case 1:
         min_left = 15;
         break;
   }
   
   var round_num = Math.round((now_left - min_left)/width_yr);

   $("#Slider").css('left', min_left + round_num * width_yr)
   document.onmousemove = null;
   document.onmouseup   = null;

   current_year = Math.floor(current_year / 10)*10 + round_num;
   triggerYearChosen(current_year);
   return false;
}
