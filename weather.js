$(function () {
    $.ajax("https://api.darksky.net/forecast/ad5bfd5056d592066e1231dc4676c63d/37.529385,-82.518584", { dataType: "jsonp"})
    // 57e2c0c91ebec60100061861 comes from postman , it does a search on codeacademy for this code id and grabs the likes
        .done(function (data) {
            var currentTemperature = Math.round(data.currently.temperature) + "&deg; F";

//$(".currentTemperature").append('<h1>' + currentTemperature + '</h1>');
        $("#location1").html(data.latitude);
       $("#location2").html(data.longitude);
        $("#currentCond").html(data.currently.summary);
        $("#timeZone").html(data.timezone);
        $("#hourly").html(data.hourly);

        });
});