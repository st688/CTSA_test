function initAnnouncement(){
   $.get("data/index/announcement", function(data) {
      $("#Announcement").html(data);
      // 寬度太窄則置中(Mobile support)
      if($("#MainPic").width() < 800){
         if($("#MainPic").width() < 400){
            $("#Announcement").css('left', 0 );
         }else{
            $("#Announcement").css('left', $("#MainPic").width()/2 - 200);
         }
      }
   });
   return false;
}

var pic = 4; // 首頁隨機圖片數

// 讓內文頂部與底部無距離
$('.Content-Fix').css('height','0px');
document.write ("<img src=\"images/index/main" + Math.floor(Math.random()*pic) + ".jpg\" />");

addLoadEvent(initAnnouncement());
