function loadNewcomer2004(page) {
   $('#Newcomer-Menu-List li').css('color','#cc0000');
   $('#Option'+page+' p').css('color','#003399');
   $.get("data/newcomer/n2004/page" + page, function(data) {
      $('#Newcomer-Container').html(data);
   });
}

addLoadEvent(loadNewcomer2004('1'));
