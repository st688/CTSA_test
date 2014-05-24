// 時間軸樣式
var s = 0;
// 當前年份
var n = 2014;

// 建立雙時間軸：年代、年份
function setTimeLine(v){
   var html_stack = "<div id='Slider-Container'><div id='Slider'></div></div>\n"
                  + "<div id='Yr-Container'>";
   var s, mi, ma, dec;
   mi = parseInt($("Dec"+ v).mi);
   ma = parseInt($("Dec"+ v).ma);
   dec = v * 10;

alert("mi:" + mi + "ma" + ma );
   for(var i = 0; i < 10; ++i){
      html_stack += "<div class='Yr'>";
      if( (i >= mi) && (i <= ma) ){
         html_stack += " " + (dec + i) + " ";
      }
      html_stack += "</div>\n";
   }
   if( (s == 1) && (ma == 9) ){
      html_stack += "<div class='Yr'> " + (dec + 10) + " </div>\n";
   }
   html_stack += "</div>";
   $('#Time-Line-Yr').html(html_stack);
}

// 生成時間軸
function initTimeLine(page){
   var v;
   // 給定參數page，從data/page下面找time_line檔案
   $.get('data/'+page+'/time_line', function(data) {
      // 預備輸出的html
      var html_stack = "";
      n = parseInt($('n',data).text()); // 取得當前年份
      s = parseInt($('s',data).text()); // 取得樣式

      html_stack += "<ul id='Time-Line-Dec'>\n"
      $('dec',data).each(function(){
         v  = parseInt($(this).find('v').text()); 
         mi = parseInt($(this).find('i').text()); // min
         ma = parseInt($(this).find('a').text()); // max

         html_stack += "<li id='Dec"+ v + "' mi=" + mi + " ma=" + ma + ">" 
                     + "<a href=\"#\" onclick=\"return setTimeLine(" + v + ");\" >"
                     + (v*10) + "-" + ((v+1)*10) + "</a></li>\n";
      });

      html_stack += "</ul>\n<ul id='Time-Line-Yr'></ul>";
      $('#Time-Line').html(html_stack);
      setTimeLine(n % 10);
   });
}

