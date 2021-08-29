// ~~~~~~~~~~~~ Hilfs-Funktion ~~~~~~~~~~~ //
function getEl(para1) {
    var output = document.getElementById(para1);
    return output;
};

// ~~~~~~~~~~~~~~~~~~ JS ~~~~~~~~~~~~~~~~~ // 

console.log('test');



// ~~~~~~~~~~~~~~~~ jQuery ~~~~~~~~~~~~~~~ //
$(document).ready(function () {
    if (window.console) console.log('jQuery is called');

    // jQuery methods go here...
    /* function called when you click of the button */
    $("button").click(function () {

        /* this if else to change the text in the button */
        /* 
        if ($("button").text() == "AA") {
            $("button").text("BB");
        } else {
            $("button").text("AA");
        }
        */
        /* this if else to change the text in the button */
         
        if ($("button").text() == "&#10008;") {
            $("button").text("&#x2630;");
        } else {
            $("button").text("&#10008;");
        }
        

        /* this function toggle the visibility of our "li" elements */
        //$("li").toggle("slow");
    });
});