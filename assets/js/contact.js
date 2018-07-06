$(document).ready(function() {
    $('form#contact-form').submit(function() {
        $('form#contact-form .error').remove();
        var hasError = false;
        $('.requiredField').each(function() {
            if(jQuery.trim($(this).val()) == '') {
                var labelText = $(this).prev('label').text();
                $(this).parent().append('<span class="error">Olvidaste poner '+labelText+'</span>');
                $(this).addClass('inputError');
                hasError = true;
            } else if($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!emailReg.test(jQuery.trim($(this).val()))) {
                    var labelText = $(this).prev('label').text();
                    $(this).parent().append('<span class="error">Su entrada no es valida '+labelText+'</span>');
                    $(this).addClass('inputError');
                    hasError = true;
                }
            }
        });
        if(!hasError) {
            $('form#contact-form input.submit').fadeOut('normal', function() {
                $(this).parent().append('');
            });

            $("#loader").show();
            $.ajax({
                url: "assets/contact/contact.php",
                type: "POST",
                data:  new FormData(this),
                contentType: false,
                cache: false,
                processData:false,
                success: function(data){
                    $('form#contact-form').slideUp("fast", function() {
                        $(this).before('<div class="success">Gracias! por contactarme. Su email se envio con exito.</div>');
                        $("#loader").hide();
                    })
                }
            });

            return false;
        }

    });
});