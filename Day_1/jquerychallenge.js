// when the document html loads $function occures
$function(){

    $("add").click(function(ev) {
    // ev means event click
    $('ul').append('<li>Item2< buttonclass="remove">Remove</b>/li>");

});
//$("remove).click()
$("ul").click(".remove",function(ev){
    console.log(ev);
    $(ev.target).parent().fadeout(); //remove()
});


$("#name").blur(function){
// var name = $(#name"), val();
//var name = ev.target.value;

var name = $(ev.target).val();
alter("Hello, " + name);
});
});