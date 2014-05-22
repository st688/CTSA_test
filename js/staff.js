function loadStaff(yeartag) {
   var staff_data;
   $.get("pages/staff/" + yeartag, function(data) {
      staff_data = data;
   });
   $('#Staff').html(staff_data);
}

addLoadEvent(function(){loadStaff("s2014_15");});
