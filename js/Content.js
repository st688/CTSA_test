// 按下選單的時候切換內文
function loadContent(page) {
   $.get("pages/" + page + ".html", function(data) {
      $('#Content').html(data);
      $('#Page_css').attr("href", "css/" + page + ".css");
   });
   return false;
}
