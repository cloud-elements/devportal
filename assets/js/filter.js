$(document).ready(function(){

  $('#txtList').keyup(function () {
      var value = this.value.toLowerCase();
      $('#filter div.element-column').each(function () {
          if ($(this).text().toLowerCase().search(value) > -1) {
              $(this).show();
          } else {
              $(this).fadeOut('slow').hide();
          }
      });
  });

});
