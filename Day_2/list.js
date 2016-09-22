//alternative: $(document).ready(function() {
$(function() {

    // Pure-JS equivalencies
    // $("#add") ~= document.getElementById("add")
    // $(".list") ~= document.getElementsByClassName("list")

    //alternative: $("button#add").on("click", function(ev) {
    $("button#add").click(function(ev /*event*/) {
        var newCar = $("#newcar").val();

        // Prevent adding a blank item
        if(newCar == "") return;
        
        $("#list").append("<li>"
        + newCar  + ' <button class="remove">(x)</button>' + "</li>");
        
        $("#newcar").val("");
    });

    $("#list").click("button.remove", function(ev) {
        $(ev.target).parent().fadeOut();
    });

});
