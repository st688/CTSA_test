function loadLinks() {
   $.get("data/links/data", function(data) {
      // 預備輸出的html
      var html_stack = "";
      $('g',data).each(function(){
         t = $(this).find('gt').text(); // 標題
         html_stack += "<div class='Link-Group'>\n"
                     + "<div class='Link-Group-Title'>" + t + "</div>\n";

         $('l',$(this)).each(function(){
            var t, a;

            t = $(this).find('t').text(); // 標題
            a = $(this).find('a').text(); // 網址

            // 生成連結
            html_stack += "<div class='Link'>\n"
                        + "   <div class='Link-Title'>" + t + "</div>\n"
                        + "   <div class='Link-Href'><a href=\"#\" onclick=\"return loadNewScreen('http://" + a + "');\">" + a + "</a></div>\n"
                        + "</div>\n";

         });

         html_stack += "</div>\n";
      });
      $('#Links').html(html_stack);

      // 讓群組方塊緊密疊合
      var offset = 0;
      $('.Link-Group').each(function(){
         if( offset <= 0 ){
            $(this).css('float','left');
            offset += $(this).height();
         }else{
            $(this).css('float','right');
            offset -= $(this).height();
         }
      });
   });
}

addLoadEvent(loadLinks());
