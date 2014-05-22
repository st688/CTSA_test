function loadStaff(yeartag) {
   $.get("pages/staff/" + yeartag, function(data) {
      $('#Staff').html(data);
   });
}

function initStaff(){
   loadStaff("s2014_15");
}

addLoadEvent(initStaff());
