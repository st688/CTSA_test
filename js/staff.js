function loadStaff(yeartag) {
   $.get("pages/staff/" + yeartag, function(data) {
      // 預備輸出的html
      var html_stack = "";
      // data內容的定義如staff/README
      $('p',data).each(function(){
         var tc, te, m, m_len, c, e, a, i, em;         
         // 生成職位資料
         tc = $(this).find('tc').text();
         te = $(this).find('te').text();
         html_stack = html_stack + "<div>" + tc + te + "</div>\n";

         $('m',$(this)).each(function(){
            // 生成個人資料
            html_stack = html_stack + "<div>";
            c = $(this).find('c').text();
            e = $(this).find('e').text();
            a = $(this).find('a').text();
            html_stack = html_stack + c + e + a;
            i = $(this).find('i').text();
            html_stack = html_stack + "<img height=80 width=80 onerror=\"this.src='images/staff/noImg.jpg'\" src=\"images/staff/" + i + ".jpg\" />";
            em = $(this).find('em').text();
            if(em == ""){
               html_stack = html_stack + "<a href=\"mailto:"+i+"@cornell.edu\">"+i+"@cornell.edu</a>";
            } else {
               html_stack = html_stack + "<a href=\"mailto:"+em+"\">"+em+"</a>";
            }
            html_stack = html_stack + "</div>\n";
         });
      });
      $('#Staff').html(html_stack);
   });
}

function initStaff(){
   loadStaff("s2014_15");
}

addLoadEvent(initStaff());
