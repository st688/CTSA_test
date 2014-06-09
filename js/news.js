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
         f = $(this).find('f').text(); // 對應檔案，檔名為 "s" + 月 + 日 + "_" + f
         time_mdy = m.split("/");      // 月,日,年
         is_file  = ();
         // 生成連結
         html_stack += "<div class='news'>\n" 
                     + "<a href=\"#\" onclick='return ";
         // 測試是否為一般檔案
         if( f.indexOf(".")>-1 ){
            // 若是，提供下載
            html_stack += "loadNewScreen";
         }else{
            // 若否，彈出視窗
            html_stack += "popScreen";
         }
         html_stack += "(\"data/news/y" + time_mdy[2] + "/s" + time_mdy[0] + time_mdy[1] + "_" + f + "\");'>";                     
                     + "   <div class='news_time'>"      + m + "</div>\n"
                     + "   <div class='news_title'>"     + t + "</div>\n"
                     + "   <div class='news_announcer'>" + a + "</div>\n"
                     + "</a>"
                     + "</div>\n";
      });
      $('#News').html(html_stack);
   });
}

addLoadEvent(loadNewsList());
