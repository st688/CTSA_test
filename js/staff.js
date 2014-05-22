function loadStaff(yeartag) {
   $.get("pages/staff/" + yeartag, function(data) {
      // 預備輸出的html
      var html_stack = "";
      // data內容的定義如staff/README
      $('p',data).each(function(){
         var tc, te, m, m_len, c, e, a, i, em;         

         // 生成職位資料
         html_stack = html_stack + "<div id='Position'>\n";
         tc = $(this).find('tc').text();
         te = $(this).find('te').text();

         html_stack = html_stack + "<div id='PositionDescription'>\n"
                                 + "<div id='ChineseTitle'>" + tc + "</div>\n"
                                 + "<div id='EnglishTitle'>" + te + "</div>\n"
                                 + "</div>\n";
         $('m',$(this)).each(function(){
            // 生成個人資料
            html_stack = html_stack + "<div id='Member'>\n<div id='MemberDescription'>\n";
            c = $(this).find('c').text();
            e = $(this).find('e').text();
            a = $(this).find('a').text();
            html_stack = html_stack + "<div id='ChineseName'>" + c + "</div>\n"
                                    + "<div id='EnglishName'>" + e + "</div>\n"
                                    + "<div id='Major'>"       + a + "</div>\n";
            i = $(this).find('i').text();
            em = $(this).find('em').text();
            html_stack = html_stack + "<div id='EMail'>";
            if(em == ""){
               html_stack = html_stack + "<a href=\"mailto:"+i+"@cornell.edu\">"+i+"@cornell.edu</a>";
            } else {
               html_stack = html_stack + "<a href=\"mailto:"+em+"\">"+em+"</a>";
            }
            html_stack = html_stack + "</div>\n</div>\n<div id='MemberPhoto'>"
                                    + "<img height=80 width=80 onerror=\"this.src='images/staff/noImg.jpg'\" src=\"images/staff/" 
                                    + i + ".jpg\" />"
                                    + "</div>\n</div>\n";
         });
         html_stack = html_stack + "</div>\n";
      });
      $('#Staff').html(html_stack);
   });
}

function initStaff(){
   var latest, decade, year_min, year_max;
   $.get("pages/staff/years", function(data) {
alert(data);
      latest = $(data).find('latest');

      loadStaff("s"+latest);
   });
}

addLoadEvent(initStaff());
