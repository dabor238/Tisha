$(document).ready(function () {
    $('.gracias').hide();
    $("form").submit(function (e) {
        e.preventDefault();
    });
    $('.btnEnviarDos').click(function () {
        $('.gracias').hide();
        $('.formularioDiv').trigger("reset");
        $('.formularioDiv').show();
    });
    $('.cambiarTxt').click(function () { 
        $('.enviando').text('Enviando...');
        $('.cambiarTxt').prop('disabled', true);
    });

    $('#btnEnviar').click(function () {
        var nombre = $('#txtNombre').val();
        var telefono = $('#txtTelefono').val();
        enviarDatosServer(nombre, telefono);
    });
    $('#btnEnviar2').click(function () {
        var nombre = $('#txtNombre2').val();
        var telefono = $('#txtTelefono2').val();
        enviarDatosServer(nombre, telefono);
    });

    function enviarDatosServer(nombre, telefono) {
            if (nombre != "" && telefono != "") {
                var usuarioRequest = {
                    Nombre: nombre,
                    Email: "-",
                    TextArea: "-",
                    Telefono: telefono,
                    IdPrograma: 2
                }
                $.ajax({
                    type: 'POST',
                    url: 'http://www.instaclientes.com/api/usuarios/IngresoDatos',
                    //url: 'http://localhost:58924/api/usuarios/IngresoDatos',
                    dataType: 'json',
                    data: JSON.stringify(usuarioRequest),
                    contentType: 'application/json; charset=utf-8',
                    async: false,
                    success: function (data) {
                        $('.formularioDiv').hide();
                        $('.gracias').show('slow');
                        resert();
                    },
                    error: function (xhr) {
                        alert('Problemas al ingresar los datos. Intente nuevamente.');
                        resert();
                    }
                });
            } else {
                alert('Por favor llene todos los campos');
                resert();
            }
    }

    function resert() {
        $('.enviando').text('Enviar');
        $('.cambiarTxt').prop('disabled', false);
    }
    //$('#btnEnviar').click(function () {
    //    var nombre = $('#txtNombre').val();
    //    var mail = $('#txtMail').val();
    //    var telefono = $('#txtTelefono').val();
    //    var texto = $('#txt').val();

    //    if (nombre != "" && (mail != "" | telefono != "")) {
    //        var usuarioRequest = {
    //            Nombre: nombre,
    //            Email: mail,
    //            Telefono: telefono,
    //            TextArea: texto,
    //            IdPrograma: 2
    //        }
    //        $.ajax({
    //            type: 'POST',
    //            url: 'http://www.resumitelo.com/api/usuarios/IngresoDatos',
    //            //url: 'http://localhost:58924/api/usuarios/IngresoDatos',
    //            dataType: 'json',
    //            data: JSON.stringify(usuarioRequest),
    //            contentType: 'application/json; charset=utf-8',
    //            async: false,
    //            success: function (data) {
    //                $('#formulario').hide();
    //                $('.gracias').show('slow');
    //                $('#btnEnviar').text('Enviar');
    //            },
    //            error: function (xhr) {
    //                alert('Problemas al ingresar los datos. Intente nuevamente.');
    //            }
    //        });
    //    } else {
    //        alert('Por favor llene todos los campos');
    //    }

    //});

});