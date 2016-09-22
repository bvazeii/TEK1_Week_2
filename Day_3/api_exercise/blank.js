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



$(function () {
    $.ajax("http://rest.learncode.academy/api/learncode/friends/57e2c0c91ebec60100061861")
    // 57e2c0c91ebec60100061861 comes from postman , it does a search on codeacademy for this code id and grabs the likes
        .done(function (data) {
        $("#me").append(data.name + " likes " + data.drink);
        });
});

// when you run the Html , you get Friend List

// Kelly likes juice