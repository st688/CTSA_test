function loadStaff(yeartag) {
alert("asd");
   $.get("pages/staff/" + yeartag + ".xml", {}, function(data) {
alert("asd");
      // 預備輸出的html
      var html_stack = "";
alert(data);
      // data內容的定義如staff/README
      $('p',data).each(function(){
         var tc, te, m, m_len, c, e, a, i, em;         
         // 生成職位資料
alert("as2");
         tc = $(this).find('tc').text();
alert("as3");
         te = $(this).find('te').text();
         html_stack = html_stack + "<div>" + tc + te + "</div>\n";
alert("as4");
/*
         $('m',$(this)).each(function(){
            // 生成個人資料
            html_stack = html_stack + "<div>";
            c = $(this).find('c').text();
            e = $(this).find('e').text();
            html_stack = html_stack + c + e + a;
            a = $(this).find('a').text();
            i = $(this).find('i').text();
            html_stack = html_stack + "<img onerror=\"this.src='images/noImg.jpg'\" src=\"images/" + i + ".jpg\" />";
            em = $(this).find('em').text();
            html_stack = html_stack + "</div>\n";
         });
*/
      });
alert("as5");
      $('#Staff').html(html_stack);
   });
}

function initStaff(){
   loadStaff("s2014_15");
}

addLoadEvent(initStaff());
