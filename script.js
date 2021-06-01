function copyToClipboard(element) {
    var $temp = $("<input>");
    $("#fucker1").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function copyToClipboard2(element) {
    var $temp = $("<input>");
    $("#fucker2").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

$("#p1").click(function() {
    $(".gay").fadeIn();
    setTimeout(function() {
        $(".gay").fadeOut();
    }, 1000);
});
$("#p2").click(function() {
    $(".gay").fadeIn();
    setTimeout(function() {
        $(".gay").fadeOut();
    }, 1000);
});

$(".gay").fadeOut();


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});