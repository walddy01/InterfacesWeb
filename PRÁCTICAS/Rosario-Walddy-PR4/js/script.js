$(document).ready(function () {
    console.log("hola");
    var toast = $("#liveToast");

    setTimeout(function () {
        toast.toast("show");
    }, 3000);
});
