$(document).ready(function(){
  // Hide any elements that are in the hidden list
  $.getJSON('hidden.json', (json) => {
    json.hiddenElements.forEach(item => {
      console.log(item);
      $( `div.element-column:contains('${item}')` ).hide();
    })
    $('#txtList').keyup(function () {
      var value = this.value.toLowerCase();
      $('#filter div.element-column').each(function () {
          if ($(this).text().toLowerCase().search(value) > -1) {
              if(!json.hiddenElements.includes($(this).text())) $(this).show();
          } else {
              $(this).fadeOut('slow').hide();
          }
      });
    });
  })
});
