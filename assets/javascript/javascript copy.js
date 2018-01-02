  var topics = ["space", "luke", "leia", "han solo", "darth vader"];

$("document").ready(function () {

  for (var i = 0; i < topics.length; i++) {
//for the length of the array, make one button with each string name inside of it.
    $("#buttons").append("<button>" + topics[i] + "</button>");
    $("button").attr("id", topics[i]);
    }

//the buttons need to have an id that matches whats in the array
});

// $("button").attr("id", topics[i]);



//below we are defining what the button is going to do when it is clicked; it is going to interact with the API and populate the page with gifs correlating to the respective strings
$("button").on("click", function() {
  var searchTopic = $("#addTopic").attr("id");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTopic + "&api_key=JiSrtT5eP6xzCZWaWhojJr1PwhEaHKh9&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
        });
});
