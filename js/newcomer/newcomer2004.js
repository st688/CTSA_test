function loadNewcomer2004(page) {
   $('#Newcomer-Menu-List li p').css('color','#003399');
   $('#Option'+page+' p').css('color','#cc0000');
   $.get("data/newcomer/n2004/page" + page, function(data) {
      $('#Newcomer-Container').html(data);
   });
}

addLoadEvent(loadNewcomer2004('1'));
