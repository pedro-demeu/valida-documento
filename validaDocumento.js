$(document).ready(function(e) {
    $("#id_documento").unmask();
    $("#id_documento").focusout(function() {
      $("#id_documento").unmask();
      var tamanho = $("#id_documento").val().replace(/\D/g, '').length;
      if (tamanho == 11) {
        $("#id_documento").mask("999.999.999-99");
      } else if (tamanho == 14) {
        $("#id_documento").mask("99.999.999/9999-99");
      }
    });
    $("#id_documento").focusin(function() {
      $("#id_documento").unmask();
    });
});