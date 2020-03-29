$("#no-restaurants").hide();

var searchCity = localStorage.getItem("searchCity");

function getRestaurants() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `restaurants/${searchCity}`,
        type: 'GET',
        data: {},
        success: function(data) {
          resolve(data);
        },
        error: function(error) {
          reject(error);
        },
      })
    })
}

async function loadRestaurants() {
    response = await getRestaurants();
    console.log(response); // 10
    $("#restaurant-name").text(response[0].name);
    $("#restaurant-image").attr("src", response[0]['imgUrl']);
    $("#price").text(response[0].price);
    return response;
  }

response = loadRestaurants();
var index = 0;

function nextRestaurant() {
  //console.log(response.length);
  index += 1;
  if(index < response.length) {
    $("#restaurant-name").text(response[index].name);
    $("#restaurant-image").attr("src", response[index]["imgUrl"]);
    $("#price").text(response[index].price);
  }
  else {
    $("#no-restaurants").show();
    $(".restaurant-list").hide();
  }
}

//displaying next restaurant when user clicks thumbs up
$("#thumbs-up").on("click", function() {
  $.get("/api/user_data").then(function(data) {
    //console.log(data.email);
    var newLike = {
      user: data.email,
      restaurantId: response[index].name,
      imageURL: response[index]["imgUrl"],
      latitude: response[index].latitude,
      longitude: response[index].longitude
    };
    console.log(newLike)
    $.post("/api/likes/add", newLike);
    nextRestaurant();
  });
});

$("#thumbs-down").on("click", function() {
  nextRestaurant();
});