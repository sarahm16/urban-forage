const mapKey = "JprhJCXYJMxRCpTODmFal0wPQh9T04hp"; // NEED TO ENCRYPT KEYS BUT HOW DO I DO THAT
const yelpKey = "Hb6aX_W6vp4XnTdk0V53KQpvXNGQ7BaIk_eCv-rmwiwyJdC0c2ij-2yG19dNp-KLKNZb8RUNbyOAQ7fnOTYFlbvD_2fhk6geLH8S6w_3it3JQGFz95kHe0IzZmd2XnYx";
var mapQuery = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapKey}&location=`;
let radius = false;
let price = false;
let openAt = false;

$("#see-matches").hide();

//sample restaurant array
// var response = [
//       {
//           "id": "xqH038QcquJEMm5LIZHd5w",
//           "alias": "elliotts-oyster-house-seattle-2",
//           "name": "Elliott's Oyster House",
//           "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Am6AabmBhkHHqrGRSg2clQ/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/elliotts-oyster-house-seattle-2?adjust_creative=zMQ7xkuFrSww120F123J-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMQ7xkuFrSww120F123J-g",
//           "review_count": 3451,
//           "categories": [
//               {
//                   "alias": "seafood",
//                   "title": "Seafood"
//               }
//           ],
//           "rating": 4.0,
//           "coordinates": {
//               "latitude": 47.6054699,
//               "longitude": -122.34092
//           },
//           "transactions": [
//               "delivery"
//           ],
//           "price": "$$$",
//           "location": {
//               "address1": "1201 Alaskan Way",
//               "address2": "",
//               "address3": "Pier 56",
//               "city": "Seattle",
//               "zip_code": "98101",
//               "country": "US",
//               "state": "WA",
//               "display_address": [
//                   "1201 Alaskan Way",
//                   "Pier 56",
//                   "Seattle, WA 98101"
//               ]
//           },
//           "phone": "+12066234340",
//           "display_phone": "(206) 623-4340",
//           "distance": 837.0309305280139
//       },
//       {
//           "id": "JQAKcOzObl2I7vLKZLkBdQ",
//           "alias": "fogón-cocina-mexicana-seattle-2",
//           "name": "Fogón Cocina Mexicana",
//           "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/M1D-cy7HIwyvvO0deCjyDA/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/fog%C3%B3n-cocina-mexicana-seattle-2?adjust_creative=zMQ7xkuFrSww120F123J-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMQ7xkuFrSww120F123J-g",
//           "review_count": 1432,
//           "categories": [
//               {
//                   "alias": "mexican",
//                   "title": "Mexican"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 47.6153793,
//               "longitude": -122.3240814
//           },
//           "transactions": [
//               "restaurant_reservation",
//               "delivery"
//           ],
//           "price": "$$",
//           "location": {
//               "address1": "600 E Pine St",
//               "address2": "",
//               "address3": "",
//               "city": "Seattle",
//               "zip_code": "98122",
//               "country": "US",
//               "state": "WA",
//               "display_address": [
//                   "600 E Pine St",
//                   "Seattle, WA 98122"
//               ]
//           },
//           "phone": "+12063207777",
//           "display_phone": "(206) 320-7777",
//           "distance": 1430.6528800174008
//       },
//       {
//           "id": "Lw7NmZ3j-WEye97ywEmkXQ",
//           "alias": "vons-1000-spirits-seattle-4",
//           "name": "Von's 1000 Spirits",
//           "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/iUTo8Vc5is6j5dO358VWTg/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/vons-1000-spirits-seattle-4?adjust_creative=zMQ7xkuFrSww120F123J-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMQ7xkuFrSww120F123J-g",
//           "review_count": 1563,
//           "categories": [
//               {
//                   "alias": "newamerican",
//                   "title": "American (New)"
//               },
//               {
//                   "alias": "pizza",
//                   "title": "Pizza"
//               },
//               {
//                   "alias": "venues",
//                   "title": "Venues & Event Spaces"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 47.606565,
//               "longitude": -122.338337
//           },
//           "transactions": [
//               "restaurant_reservation",
//               "pickup",
//               "delivery"
//           ],
//           "price": "$$",
//           "location": {
//               "address1": "1225 1st Ave",
//               "address2": "",
//               "address3": "",
//               "city": "Seattle",
//               "zip_code": "98101",
//               "country": "US",
//               "state": "WA",
//               "display_address": [
//                   "1225 1st Ave",
//                   "Seattle, WA 98101"
//               ]
//           },
//           "phone": "+12066218667",
//           "display_phone": "(206) 621-8667",
//           "distance": 708.8551134488023
//       },
//       {
//           "id": "UaszJCXczQ-djWsQ0ylVAA",
//           "alias": "damn-the-weather-seattle",
//           "name": "Damn the Weather",
//           "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/S_ZMho0yeYfRMi78UDHkOA/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/damn-the-weather-seattle?adjust_creative=zMQ7xkuFrSww120F123J-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMQ7xkuFrSww120F123J-g",
//           "review_count": 449,
//           "categories": [
//               {
//                   "alias": "cocktailbars",
//                   "title": "Cocktail Bars"
//               },
//               {
//                   "alias": "newamerican",
//                   "title": "American (New)"
//               }
//           ],
//           "rating": 4.0,
//           "coordinates": {
//               "latitude": 47.6011167,
//               "longitude": -122.3340814
//           },
//           "transactions": [],
//           "price": "$$",
//           "location": {
//               "address1": "116 1st Ave S",
//               "address2": "",
//               "address3": "",
//               "city": "Seattle",
//               "zip_code": "98104",
//               "country": "US",
//               "state": "WA",
//               "display_address": [
//                   "116 1st Ave S",
//                   "Seattle, WA 98104"
//               ]
//           },
//           "phone": "+12069461283",
//           "display_phone": "(206) 946-1283",
//           "distance": 369.32307360588806
//       },
//       {
//           "id": "0zyWCjmU4q3D2YJzJUULqA",
//           "alias": "gourmet-noodle-bowl-seattle",
//           "name": "Gourmet Noodle Bowl",
//           "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/w9gf0uNqJwJcrKF8lwG1hg/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/gourmet-noodle-bowl-seattle?adjust_creative=zMQ7xkuFrSww120F123J-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMQ7xkuFrSww120F123J-g",
//           "review_count": 408,
//           "categories": [
//               {
//                   "alias": "chinese",
//                   "title": "Chinese"
//               },
//               {
//                   "alias": "taiwanese",
//                   "title": "Taiwanese"
//               },
//               {
//                   "alias": "hotpot",
//                   "title": "Hot Pot"
//               }
//           ],
//           "rating": 4.0,
//           "coordinates": {
//               "latitude": 47.596323,
//               "longitude": -122.322679
//           },
//           "transactions": [
//               "restaurant_reservation",
//               "pickup",
//               "delivery"
//           ],
//           "price": "$$",
//           "location": {
//               "address1": "707 8th Ave S",
//               "address2": "",
//               "address3": "",
//               "city": "Seattle",
//               "zip_code": "98104",
//               "country": "US",
//               "state": "WA",
//               "display_address": [
//                   "707 8th Ave S",
//                   "Seattle, WA 98104"
//               ]
//           },
//           "phone": "+12062648899",
//           "display_phone": "(206) 264-8899",
//           "distance": 956.291493116988
//       }
//   ];

var index = 0;

// //setting initial restaurant to the first restaurant in the array
// $("#restaurant-name").text(response[0].name);
// $("#restaurant-image").attr("src", response[0]["image_url"]);
// $("#price").text(response[0].price)
//
//
// function nextRestaurant() {
//   index += 1;
//   if(index<response.length) {
//     $("#restaurant-name").text(response[index].name);
//     $("#restaurant-image").attr("src", response[index]["image_url"]);
//     $("#price").text(response[i].price)
//   }
//   else {
//     $("#see-matches").show();
//   }
// }
//
// //displaying next restaurant when user clicks thumbs up
// $("#thumbs-up").on("click", function() {
//   $.get("/api/user_data").then(function(data) {
//     console.log(data.email);
//     var newLike = {
//       user: data.email,
//       restaurantId: response[index].name,
//       imageURL: response[index]["image_url"],
//       latitude: response[index].coordinates.latitude,
//       longitude: response[index].coordinates.longitude
//     }
//     $.post("/api/likes/add", newLike);
//   })
//   nextRestaurant();
// });

$("#thumbs-down").on("click", function() {
    nextRestaurant();
});

