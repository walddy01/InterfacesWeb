$(document).ready(function () {
    $success = $("#success");
    $error = $("#error");
    $myForm = $("#myForm");

    $success.hide();
    $error.hide();

    $myForm.on("submit", function (event) {
        event.preventDefault();
        $.ajax({
            type: "get",
            url: "../Rosario-Walddy-PR4/registro.json",
            dataType: "JSON",
            success: function (data) {
                if(data.error == 0){
                    $success.show();
                } else {
                    $("#error_msj").html(data.mensaje_error);
                    $error.show();
                }
            }
        });
    })
    // $.ajax({
    //     type: "get",
    //     url: "../Rosario-Walddy-PR4/registro.json",
    //     dataType: "JSON",
    //     success: function (data) {
    //         if(data.error == 0){
    //             console.log("Registro completado");;
    //         } else {
    //             console.log("Error " + data.error + ": " + data.mensaje_error);
    //         }
    //     }
    // });
});