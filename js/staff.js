function loadStaff(yeartag) {
   var staff_data;
   $('#Staff').html("Load pages/staff/" + yeartag)
   $.get("pages/staff/" + yeartag, function(data) {
      staff_data = data;
      $('#Staff').html("Got pages/staff/" + yeartag)
   });
   $('#Staff').html(staff_data);
}

addLoadEvent(function(){loadStaff("s2014_15");});
