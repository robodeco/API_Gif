var topics = ["space", "luke skywalker", "leia organa", "han solo", "darth vader"];
var gifDiv;
var gifImage;

$("document").ready(function () {

  for (i = 0; i < topics.length; i++) {
    var myButton = $('<button>');
    myButton.text(topics[i]);
    myButton.attr("data-theme", topics[i]);
    $("#buttons").append(myButton)
    }
  onClickFetch();

});

//here I append a button from the form when the form is submitted, and the button then acts as any of the starting buttons would.
$("document").ready(function () {
    $("#addStarWars").on("click", function () {

      event.preventDefault();

      var myButton2 = $('<button>');
      var newTopic = $("#starwars-input").val();

      topics.push(newTopic);

      myButton2.text(newTopic);
      myButton2.attr("data-theme", newTopic);
      console.log(topics);

      $("#buttons").append(myButton2);
      console.log(newTopic);

      onClickFetch();
    });
});


function onClickFetch () {
$("button").on("click", function  (){

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
          var gifDiv = $("<div>");
          gifDiv.attr("class", "gif");

          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);

          var gifImage = $("<img>");

//below are the first instances of me trying to freeze the gifs every time they are clicked. every time they are clicked the src switches to and from the data states below
              gifImage.attr("src", results[i].images.fixed_height_still.url);

              gifDiv.attr("data-state", "still");
              gifDiv.attr("data-still", results[i].images.fixed_height_still.url);
              gifDiv.attr("data-animate", results[i].images.fixed_height.url);

              gifDiv.prepend(p);
              gifDiv.prepend(gifImage);

          $("#gifs-appear-here").prepend(gifDiv);
          console.log("success");

          pauseGif();
        }
    });

  });
}

  //the below code does not seem to be animating the gifs when clicked, even though the source of the gifs change. also, i know its been discussed in class a lot, but is "this" referring to the document in the scenario below as its not wrapped in an object?

function pauseGif() {
$(".gif").on("click", function () {
var state = $(this).attr("data-state");

if (state === "still") {
  $(this).attr("src", $(this).attr("data-animate"));
  $(this).attr("data-state", "animate");
}
else {
  $(this).attr("src", $(this).attr("data-still"));
  $(this).attr("data-state", "still");
}
console.log(state)
});

}
//extra junk
//the buttons need to have an id that matches whats in the array
// $("#buttons").append("<button data-theme='space'>" + topics[0] + "</button>");
// $("#buttons").append("<button data-theme='luke'>" + topics[1] + "</button>")
// $("#buttons").append("<button data-theme='leia''>" + topics[2] + "</button>")
// $("#buttons").append("<button data-theme='han solo'>" + topics[3] + "</button>")
// $("#buttons").append("<button data-theme='darth vader'>" + topics[4] + "</button>")

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
