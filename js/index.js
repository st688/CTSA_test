var pic = 2; // 首頁隨機圖片數

document.write ("<div id='MainPic'><img src=\"images/index/main" + Math.floor(Math.random()*pic) + ".jpg\" /></div>");
