$().ready(function() {
    $("#contact_us_form").validate({
        rules : {
            name : {
              required : true
            },
            email : {
                required : true,
                email : true
            },
            subject : {
                required : true
            },
            message : {
              required: true
            }
        },
        messages: {
            name: "Ti sei dimenticato di inserire il nome",
            email: {
                required: "Ti sei dimenticato di inserire l'email",
                email: "L'email inserita non è valida"
            },
            subject: "Ti sei dimenticato di inserire l'oggetto",
            message: "Ti sei dimenticato di inserire il messaggio"
        },
        // Settiamo il submit handler per la form
        submitHandler: function(form) {
          $("#caricamentoSubmit").show();
          $("#submitButton").hide();
          var email = $("#email").val();
          var message = $("#message").val();
          var name = $("#name").val();
          var oggetto = $("#subject").val();
          $.ajax({
            url: form.action,
            type: form.method,
            contentType: 'application/json',
            data: JSON.stringify({
                'email': email,
                'message': message,
                'name': name,
                'oggetto': oggetto
            }),
            success: function(msg) {
              console.log(msg);
              $("#caricamentoSubmit").hide();
              $("#submitButton").show();
            }
          });
        }
    });
});
