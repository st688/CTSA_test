// 建立雙時間軸：年代、年份
function setTimeLine(page){
   var n, s, v, mi, ma;
   // 給定參數page，從data/page下面找time_line檔案
   $.get('data/'+page+'/time_line', function(data) {
      // 預備輸出的html
      var html_stack = "";
      
      n = $('n',data).text();
      s = $('s',data).text();
      $('n',data).each(function(){
         var t, a;

         t = $(this).find('t').text(); // 標題
         a = $(this).find('a').text(); // 網址

         // 生成連結
         html_stack += "<div class='link'>\n"
                     + "   <div class='title'>" + t + "</div>\n"
                     + "   <div class='href'><a href=\"http://" + a + "\">" + a + "</a></div>\n"
                     + "</div>\n";

      });
      $('#Links').html(html_stack);
      
   });
}







