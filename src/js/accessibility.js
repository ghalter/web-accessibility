
function applyFontSizeChange(t){
    $(".text-scalable").each(function() {
        let val = parseFloat($(this).css("font-size")) + t;
        $(this).css("font-size", val + "px");
    })
}


/**
 * Hooking up the document with the javascript
 */
$(document).ready(function(){
    $("#font-increase-button").on("click", function (e) {
        applyFontSizeChange(1);
    });
    $("#font-decrease-button").on("click", function (e) {
        applyFontSizeChange(-1);
    });
});


