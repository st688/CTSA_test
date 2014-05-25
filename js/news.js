function loadNewsList() {
   $.get("data/news/data", function(data) {
      // 預備輸出的html
      var html_stack = "";
      // 
      $('e',data).each(function(){
         var t, m, a, f;

         t = $(this).find('t').text(); // 消息標題
         m = $(this).find('m').text(); // 發佈時間
         a = $(this).find('a').text(); // 發佈人
         f = $(this).find('f').text(); // 對應檔案

         // 生成連結
         html_stack += "<div class='news'>\n"
                     + "<a href=\"#\" onclick='return showNews(\"" + f + "\");'>"
                     + "   <div class='news_time'>"      + m + "</div>\n"
                     + "   <div class='news_title'>"     + t + "</div>\n"
                     + "   <div class='news_announcer'>" + a + "</div>\n"
                     + "</a>"
                     + "</div>\n";
      });
      $('#News').html(html_stack);
   });
}

function showNews(path){
alert("data/news/s" + path);
   $.get("data/news/s" + path, function(data) {
alert("yo");

      $('#NewsContent').html(data);
alert("yo2");
   });
   return false;
}

addLoadEvent(loadNewsList());
