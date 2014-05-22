function loadStaff(yeartag) {
   var staff_data;
   alert("sta1");
   $.get("pages/staff/" + yeartag, function(data) {
      staff_data = data;
      $('#Staff').html(staff_data);
   alert("sta2");
   });
   alert("sta3");

}

function initStaff(){
   loadStaff("s2014_15");
}

addLoadEvent(initStaff());
