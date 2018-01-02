  var topics = ["space", "luke skywalker", "leia organa", "han solo", "darth vader"];
  var counter = 5;

$("document").ready(function () {
var buttonValue = 0

//the buttons need to have an id that matches whats in the array
$("#buttons").append("<button data-theme='space'>" + topics[0] + "</button>");
$("#buttons").append("<button data-theme='luke'>" + topics[1] + "</button>")
$("#buttons").append("<button data-theme='leia''>" + topics[2] + "</button>")
$("#buttons").append("<button data-theme='han solo'>" + topics[3] + "</button>")
$("#buttons").append("<button data-theme='darth vader'>" + topics[4] + "</button>")

//why do these buttons only work when the function is nestled in the above one? 

$("button").on("click", function(){

var gifTheme = $(this).attr("data-theme");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  gifTheme + "&api_key=JiSrtT5eP6xzCZWaWhojJr1PwhEaHKh9&limit=10&rating=g";

  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='item'>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height.url);


        gifDiv.prepend(p);
        gifDiv.prepend(gifImage);

        $("#gifs-appear-here").prepend(gifDiv);
        console.log("success");
      }
    });
  });


});





//extra junk

// var val = 0;
// var buttonAppend = $("#buttons").append("<button>" + topics[i] + "</button>")
// var popValue = topics.pop();
// var addValue = $("button").attr("id",topics[i]);

// var splicedArray = topics.splice(0);
// console.log(splicedArray)


// for (var i = 0; i < topics.length; i++) {
//for the length of the array, make one button with each string name inside of it.
  // $("#buttons").append("<button>" + topics[i] + "</button>")
  // $("button").attr("id", buttonValue);
  // buttonValue++
  //
  //
  // }

//the buttons need to have an id that matches whats in the array

// trying to set unique ids
// function () {
//   var buttonID = $("#buttons button");
//   buttonID.attr("id", function (index){
//     return 'button' + index;
// }
//
// });
