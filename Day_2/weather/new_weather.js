
$(function(){

   $.ajax({

       url: "https://api.darksky.net/forecast/a14cb98ee48b78959f6614b1ae2000f2/37.8267,-122.4233",
       dataType: "jsonp" ,
       success: function(result) {
           console.log(result.currently.summary);
           console.log(result.latitude);
           console.log(result.longitude);
           console.log(result.timezone);
           console.log(result.hourly);

       }
   });

   });