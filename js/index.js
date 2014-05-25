var pic = 2; // 首頁隨機圖片數

function initMainPicture(){
   var html_stack = "<img src=\"images/index/main" + Math.floor(Math.random()*pic) + ".jpg\" />";
   $('#MainPic').html(html_stack);
}

addLoadEvent(initMainPicture());
