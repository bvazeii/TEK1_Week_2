   $(function(){
 var google = "https://maps.googleapis.com/maps/api/geocode/json?address=";
 var darkSkyKey = "ad5bfd5056d592066e1231dc4676c63d/";
  $("#submit").click(function(location){
    var zip = $("#zip").val();
    if (!zip) return;
    console.log(zip);
  $.ajax(google + zip + "&key=AIzaSyATyHyPFfnMzOjIy4CZ7ORUq2lbFlGVCYs" ).done(function(data){
     var googleLat = data.results[0].geometry.location.lat;
     var googleLng = data.results[0].geometry.location.lng;
     var place = data.results[0].formatted_address;
    //  console.log(googleLat);
    //  console.log(googleLng);
    //  console.log(data);
   $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + googleLat + "," + googleLng, { dataType: "jsonp"}).done(function(data) {
    var temp = Math.round(data.currently.temperature);
    var maxTemp = Math.round(data.daily.data[0].temperatureMax);
    var minTemp = Math.round(data.daily.data[0].temperatureMin);
    var summary = data.daily.data[0].summary;
    var rain = data.daily.data[0].precipProbability;
    
    $("#location").append('<h1>' + place + '</h1>');
     $("#currentTemperature").append('<h1>' + temp + "&deg; F"+'</h1>');
     $("#temperatureMax").append("<h5>" + "Max Temperature: " + maxTemp + "&deg; F"+"</h5>"); 
      $("#minTemperature").append("<h5>" + "Min Temperature: " + minTemp + "&deg; F"+"</h5>"); 
       $("#rain").append("<h5>" + "Rain Chance: " + rain + "%" +"</h5>");     
  })
  }) 
  })
});


