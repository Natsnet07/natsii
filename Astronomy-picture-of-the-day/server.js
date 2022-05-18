$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });
//connection
function getPicture() {
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        // ?api_key=Bdzl1U2O1v2kvtYRWGGeohUaulxpN6QwbiEwi3Ch?
        type: "GET",
        data: {
            api_key: "DEMO_KEY",
            date: $("date").val()
        },
        dataType: "json",
        "success": displayPicture,
        "error": failedDisplay
    });
};
//displaying picture from the API
function displayPicture(data) {

    $("#pic").attr("src", data.url);
    $("#title").text(data.title);
};
//error handler
function failedDisplay(error) {
    alert(error.responseText);
};