$(document).ready(function(){

$("#para").click(function(){
    // paragraph by id , fades out  by the below statement
     $("#para").fadeOut('slow', 'linear');
    // Or you can do the below one which do the same but runs faster 
    //$(this).fadeOut('slow', 'linear');

});

// how to under line h3 in my html - h3 text-decoration: underline
$("h3")
.css("text-decoration", "underline")
// the below will change the font
.css("font-weight", "normal");
// select from the list ( find allows for additional selector to the jquery files)
// so the  ul is the parent and li is the first child ( ul is the parent of li)
// the jquery below goes to my jquerDOM.html file and grabs the ul and look at the first li and change the font to red
$("ul").find("li:first-child")
// the below command will make any li after
// $("ul").find("li:nth-child(3)")
$
.css("color" , "red");

//stop here
});