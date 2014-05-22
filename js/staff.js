// 判斷瀏覽器是否支援 javascript 讀取 XML 的功能，摘自http://newaurora.pixnet.net/blog/post/168003699-javascript%E8%AE%80%E5%8F%96xml
function loadXMLFile(file){
   var xmlDoc;
   if (window.ActiveXObject){
      // 這ㄧ個判斷式是針對IE，判斷是不是支援ActiveXObject 這個物件
      xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = false;
      xmlDoc.load(file);
      return xmlDoc;
   } else if (document.implementation && document.implementation.createDocument){
      // 這個判斷針對非IE瀏覽器設置，判斷是不是能夠處理DOM模型物件
      var xmlInfo = new XMLHttpRequest();
      xmlInfo.open("GET", file, false);
      xmlInfo.send(null); 
      xmlDoc = xmlInfo.responseXML;
      return xmlDoc;
   } else {
      alert("您的瀏覽器不支援Javascript!! ");
   }
}

function loadStaff(yeartag) {
alert("pages/staff/" + yeartag);
   var xml_data = loadXMLFile("pages/staff/" + yeartag);
//   $.get("pages/staff/" + yeartag, function(data) {
      // 預備輸出的html
      var html_stack = "";

      // data內容的定義如staff/README
alert(xml_data);
      var p  = xml_data.getElementsByTagName('p');
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
//   });
}

function initStaff(){
   loadStaff("s2014_15");
}

addLoadEvent(initStaff());
