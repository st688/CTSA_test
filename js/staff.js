function loadStaff(yeartag) {
   var staff_data;
   $.get("pages/staff/" + yeartag, function(data) {
      staff_data = data;
   });
   $('#Staff').html(staff_data);
}

addLoadEvent(loadStaff("s2014-15"));
