
function applyFontSizeChange(t){
    $(".text-scalable").each(function() {
        let val = parseFloat($(this).css("font-size")) + t;
        $(this).css("font-size", val + "px");
    })
}

function onSpaceClicked(e){
    console.log(e)
    if (e.keyCode == 0 || e.keyCode == 32) {
        console.log("Clicked Space")
        $(this).click();
    }
}

/**
 * Hooking up the document with the javascript
 */
$(document).ready(function(){
    $(".dropdown-item").each(function() {
        console.log($(this))
        $(this).keypress(function(e){
            if (e.keyCode == 0 || e.keyCode == 32) {      
                $(this)[0].click();
            }
        });
    });

    $("#font-increase-button").on("click", function (e) {
        applyFontSizeChange(1);
    });
    $("#font-decrease-button").on("click", function (e) {
        applyFontSizeChange(-1);
    });
    $("#font-increase-button-1").on("click", function (e) {
        applyFontSizeChange(1);
    });
    $("#font-decrease-button-1").on("click", function (e) {
        applyFontSizeChange(-1);
    });
});


