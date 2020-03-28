//sample restaurant array
var restaurants = [
  {
    name: "test",
    url:
      "http://tineye.com/images/widgets/mona.jpg"
  },
  {
    name: "test2",
    url:
      "http://tineye.com/images/widgets/mona.jpg"
  }
];

var index = 0;

//setting initial restaurant to the first restaurant in the array
$("#restaurant-name").text(restaurants[0].name);
$("#restaurant-image").attr("src", restaurants[0].url);


function nextRestaurant() {
  index += 1;
  if(index<restaurants.length) {
    $("#restaurant-name").text(restaurants[index].name);
    $("#restaurant-image").attr("src", restaurants[index].url);
  }
  else {
    //function that takes you to matches
  }
}

//displaying next restaurant when user clicks thumbs up
$("#thumbs-up").on("click", function() {
  var newLike = {
    user: "sarahmarie.carter@yahoo.com",
    restaurantId: restaurants[index].name,
    imageURL: restaurants[index].url,
    latitude: 47.252876,
    longitude: -122.444290
  }
  //console.log(newLike);
  $.post("/api/likes/add", newLike);
  nextRestaurant();
  //function that puts restaurant in likes table
});

$("#thumbs-down").on("click", function() {
  nextRestaurant();
});

let searchCity = $("#submit-city").val();

$.ajax({
  method: 'POST',
  url: 'restaurants',
  success: (res) => {
    console.log(`Posted ${searchCity}`);
  }
});

