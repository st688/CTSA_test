function initAnnouncement(){
   $.get("data/index/announcement", function(data) {
      $("#Announcement").html(data);
   });
   return false;
}

var pic = 4; // 首頁隨機圖片數

// 讓內文頂部與底部無距離
$('.Content-Fix').css('height','0px');
document.write ("<div id='MainPic'><img src=\"images/index/main" + Math.floor(Math.random()*pic) + ".jpg\" />" + 
"<div id='Announcement'></div></div>");

addLoadEvent(initAnnouncement());
