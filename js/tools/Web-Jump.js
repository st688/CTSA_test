// 全域變數，表示首頁已讀入
var __INDEX__ = true;

// 從外部來的連結
var hash = location.hash;
if(hash.length > 1){
   hash = hash.substring(1);
   location.hash = '';
   if(hash[0] == '?'){
      // #? 彈出視窗
      popScreen(hash.substring(1));
   }else{
      // # 切換內文
      loadContent(hash);
   }
}
