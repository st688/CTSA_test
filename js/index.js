var pic = 2; // 首頁隨機圖片數

function initMainPicture(){
alert("test");
   $('#MainPic').html("<img src=\"images/index/main" + Math.floor(Math.random()*pic+1) + ".jpg\" />");
alert("test2");
}

addLoadEvent(initMainPicture());
