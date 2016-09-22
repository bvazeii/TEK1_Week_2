//alternative: $(document).ready(function() {
$(function () {

    /*
    Use the Friends API to display a list of all friends (just their name).

http://rest.learncode.academy/api/learncode/friends

Modify your LIST application (or download list.zip from Slack) to dynamically add <li> tags to a <ul> tag.

You will need to use a loop to process the array that is returned from the API.

The end result should be something like:

FRIEND LIST
* Michael
* Brian
* Eagle
*/
// if you need to search for a particular names then you need to define your search 
    //friends
    var url = "http://rest.learncode.academy/api/learncode/friends";
    $.ajax(url).done(function (data) {

        // for (var i =0; i<data.length; i++){
        for (var i in data) {
            var text = data[i].name;
            $("#list").append("<li>" + text + "</li>");
        }
    
    });
     });
