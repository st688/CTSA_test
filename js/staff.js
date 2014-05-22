function loadStaff(yeartag) {
   var staff_data;
   alert("sta1");
   $.get("pages/staff/" + yeartag, function(data) {
      staff_data = data;
   alert("sta2");
   });
   alert("sta3");
   $('#Staff').html(staff_data);
}

addLoadEvent(function(){loadStaff("s2014_15");});
