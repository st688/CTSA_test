function loadStaff(yeartag) {
alert("123");
   var data = loadXMLDoc("pages/staff/" + yeartag);
alert(data);
   //$.get("pages/staff/" + yeartag, function(data) {
      // 預備輸出的html
      var html_stack = "";

      // data內容的定義如staff/README

      var p  = data.getElementsByTagName('p');
alert("123");
      var p_len = p.length;
alert("23");
      var tc, te, m, m_len, c, e, a, i, em;
alert(html_stack+"now p = " + p_len);
      // 生成職位資料
      for( var k = 0; k < p_len; ++k){
         tc = p[k].getElementsByTagName('tc');
         te = p[k].getElementsByTagName('te');
         html_stack = html_stack + "<div>" + tc[0] + te[0] + "</div>\n"
         m  = p[k].getElementsByTagName('m');
         m_len = m.length;
alert(html_stack);
         // 生成個人資料
         for( var j = 0; j < m_len; ++j){
            html_stack = html_stack + "<div>";
            c  = m[j].getElementsByTagName('c');
            e  = m[j].getElementsByTagName('e');
            a  = m[j].getElementsByTagName('a');
            html_stack = html_stack + c[0] + e[0];
            i  = m[j].getElementsByTagName('i');
            html_stack = html_stack + "<img onerror=\"this.src='images/noImg.jpg'\" src=\"images/" + i + ".jpg\" />";
            em = m[j].getElementsByTagName('em');
            html_stack = html_stack + "</div>\n";
alert(html_stack);
         }
      }
alert(html_stack);
      $('#Staff').html(html_stack);
   //});
}

function initStaff(){
   loadStaff("s2014_15");
}

addLoadEvent(initStaff());
