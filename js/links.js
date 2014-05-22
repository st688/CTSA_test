function loadLinks() {
   $.get("pages/links/data", function(data) {
      // 預備輸出的html
      var html_stack = "";
      $('l',data).each(function(){
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

addLoadEvent(loadLinks());
