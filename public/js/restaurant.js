const mapKey = "JprhJCXYJMxRCpTODmFal0wPQh9T04hp"; // NEED TO ENCRYPT KEYS BUT HOW DO I DO THAT
const yelpKey = "Hb6aX_W6vp4XnTdk0V53KQpvXNGQ7BaIk_eCv-rmwiwyJdC0c2ij-2yG19dNp-KLKNZb8RUNbyOAQ7fnOTYFlbvD_2fhk6geLH8S6w_3it3JQGFz95kHe0IzZmd2XnYx";
var mapQuery = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapKey}&location=`;
let radius = false;
let price = false;
let openAt = false;

$("#see-matches").hide();

//sample restaurant array

//response[0][0].name
//response[0][1]["image_url"]
var response = [
      {
          "id": "xqH038QcquJEMm5LIZHd5w",
          "alias": "elliotts-oyster-house-seattle-2",
          "name": "Elliott's Oyster House",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Am6AabmBhkHHqrGRSg2clQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/elliotts-oyster-house-seattle-2?adjust_creative=zMQ7xkuFrSww120F123J-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMQ7xkuFrSww120F123J-g",
          "review_count": 3451,
          "categories": [
              {
                  "alias": "seafood",
                  "title": "Seafood"
              }
          ],
          "rating": 4.0,
          "coordinates": {
              "latitude": 47.6054699,
              "longitude": -122.34092
          },
          "transactions": [
              "delivery"
          ],
          "price": "$$$",
          "location": {
              "address1": "1201 Alaskan Way",
              "address2": "",
              "address3": "Pier 56",
              "city": "Seattle",
              "zip_code": "98101",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "1201 Alaskan Way",
                  "Pier 56",
                  "Seattle, WA 98101"
              ]
          },
          "phone": "+12066234340",
          "display_phone": "(206) 623-4340",
          "distance": 837.0309305280139
      },
      {
          "id": "JQAKcOzObl2I7vLKZLkBdQ",
          "alias": "fogón-cocina-mexicana-seattle-2",
          "name": "Fogón Cocina Mexicana",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/M1D-cy7HIwyvvO0deCjyDA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/fog%C3%B3n-cocina-mexicana-seattle-2?adjust_creative=zMQ7xkuFrSww120F123J-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMQ7xkuFrSww120F123J-g",
          "review_count": 1432,
          "categories": [
              {
                  "alias": "mexican",
                  "title": "Mexican"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 47.6153793,
              "longitude": -122.3240814
          },
          "transactions": [
              "restaurant_reservation",
              "delivery"
          ],
          "price": "$$",
          "location": {
              "address1": "600 E Pine St",
              "address2": "",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98122",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "600 E Pine St",
                  "Seattle, WA 98122"
              ]
          },
          "phone": "+12063207777",
          "display_phone": "(206) 320-7777",
          "distance": 1430.6528800174008
      },
      {
          "id": "Lw7NmZ3j-WEye97ywEmkXQ",
          "alias": "vons-1000-spirits-seattle-4",
          "name": "Von's 1000 Spirits",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/iUTo8Vc5is6j5dO358VWTg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/vons-1000-spirits-seattle-4?adjust_creative=zMQ7xkuFrSww120F123J-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMQ7xkuFrSww120F123J-g",
          "review_count": 1563,
          "categories": [
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              },
              {
                  "alias": "pizza",
                  "title": "Pizza"
              },
              {
                  "alias": "venues",
                  "title": "Venues & Event Spaces"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 47.606565,
              "longitude": -122.338337
          },
          "transactions": [
              "restaurant_reservation",
              "pickup",
              "delivery"
          ],
          "price": "$$",
          "location": {
              "address1": "1225 1st Ave",
              "address2": "",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98101",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "1225 1st Ave",
                  "Seattle, WA 98101"
              ]
          },
          "phone": "+12066218667",
          "display_phone": "(206) 621-8667",
          "distance": 708.8551134488023
      },
      {
          "id": "UaszJCXczQ-djWsQ0ylVAA",
          "alias": "damn-the-weather-seattle",
          "name": "Damn the Weather",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/S_ZMho0yeYfRMi78UDHkOA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/damn-the-weather-seattle?adjust_creative=zMQ7xkuFrSww120F123J-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMQ7xkuFrSww120F123J-g",
          "review_count": 449,
          "categories": [
              {
                  "alias": "cocktailbars",
                  "title": "Cocktail Bars"
              },
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              }
          ],
          "rating": 4.0,
          "coordinates": {
              "latitude": 47.6011167,
              "longitude": -122.3340814
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "116 1st Ave S",
              "address2": "",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98104",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "116 1st Ave S",
                  "Seattle, WA 98104"
              ]
          },
          "phone": "+12069461283",
          "display_phone": "(206) 946-1283",
          "distance": 369.32307360588806
      },
      {
          "id": "0zyWCjmU4q3D2YJzJUULqA",
          "alias": "gourmet-noodle-bowl-seattle",
          "name": "Gourmet Noodle Bowl",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/w9gf0uNqJwJcrKF8lwG1hg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/gourmet-noodle-bowl-seattle?adjust_creative=zMQ7xkuFrSww120F123J-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMQ7xkuFrSww120F123J-g",
          "review_count": 408,
          "categories": [
              {
                  "alias": "chinese",
                  "title": "Chinese"
              },
              {
                  "alias": "taiwanese",
                  "title": "Taiwanese"
              },
              {
                  "alias": "hotpot",
                  "title": "Hot Pot"
              }
          ],
          "rating": 4.0,
          "coordinates": {
              "latitude": 47.596323,
              "longitude": -122.322679
          },
          "transactions": [
              "restaurant_reservation",
              "pickup",
              "delivery"
          ],
          "price": "$$",
          "location": {
              "address1": "707 8th Ave S",
              "address2": "",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98104",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "707 8th Ave S",
                  "Seattle, WA 98104"
              ]
          },
          "phone": "+12062648899",
          "display_phone": "(206) 264-8899",
          "distance": 956.291493116988
      }
  ];

var index = 0;

//setting initial restaurant to the first restaurant in the array
$("#restaurant-name").text(response[0].name);
$("#restaurant-image").attr("src", response[0]["image_url"]);

function nextRestaurant(response) {
  index += 1;
  if(index<response.length) {
    $("#restaurant-name").text(response[index].name);
    $("#restaurant-image").attr("src", response[index]["image_url"]);
  }
  else {
    //function that takes you to matches
    $("#see-matches").show();
  }
}

//displaying next restaurant when user clicks thumbs up
$("#thumbs-up").on("click", function() {
  var newLike = {
    user: "sarahmarie.carter@yahoo.com",
    restaurantId: response[index].name,
    imageURL: response[index].url,
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
})

/**
 * This is the main function that takes in a searchString generated by buildSearchQuery() and calls the Yelp Fusion API to retrieve a list of 10 restaurants.
 *
 * @param {}  - This function does not take in any params
 * @return {String} - This function returns a searchQuery for the yelp api
 *
 * @example
 *
 *     main();
 */
function main() {
    let searchString = buildSearchQuery();
    getRestaurantData(searchString);
};

function buildSearchQuery() {
    let searchQuery = "https://api.yelp.com/v3/businesses/search?";
    // By default add api key param
    addKeyParam();
    // By default add this param // REQUIRED
    addStringParam();
    // Adds the params for lat and long of the searched city // REQUIRED
    getCityLatLong();
    addRadiusParam();
    addLimAndOffParam();
    addPriceParam();
    addOpenNowParam();
    addOpenAtParam();

    return searchQuery;
}

function addKeyParam() {
    searchQuery += `key=${yelpKey}`;
}

// Parameters
// Term (string) (search term) -- Required
function addStringParam() {
  // Just search "restaurant"
  searchQuery += "&term=restaurant";
}

// Location (string) -- REQUIRED
// Need to provide as lat/long (decimal), so give user option to search for restaurants within a certain city?

// 1. Get desired restaurant location by name
//      Need id or class of field that this will come from (input field probably?)


// 2a. get lat/long based on user location
function getCurrentLatLong(cb) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(cb, showError);
  } else {
    console.error("Geolocation is not supported by this browser");
  }
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}


// 2b. Find long/lat based on city name
//      Use mapquest dev api for retrieving the coordinates
//      Make the AJAX call to retrieve the coordinates
function getCityLatLong() {
  mapQuery = $("#city-search").val();

  $.ajax({
    url: mapQuery,
    success: (res) => {
      let data = "";
      let lat;
      let long;

      res.on('data', (chunk) => {
        data += 'chunk';
      });

      res.on('end', () => {
        let obj;
        console.log(data);
        obj = JSON.parse(data);
        lat = obj.results.displayLatLng.lat;
        long = obj.results.displayLatLng.lng;
        searchQuery += `&latitude=${lat}&longitude=${long}`;
      });
    }
  });
}

// Radius (int) -- Optional
// Suggested search radius in meters, probably convert kms to freedom units, default radius of 10 miles maybe?

// if radius exists, return radius
function addRadiusParam() {
    if (radius) {
        let radiusNum = $("#someInputField").val();
        searchQuery += `&radius=${radiusNum}`;
    } else {
     searchQuery += '&radius=16094';
    }
};

// else return 10 miles - DEFAULT
// if (radius) { searchQuery += '&radius=16094' };

// TODO Categories -- Optional
// Do we want users to be able to narrow it down to a type of food then search restaurants within that category

// limit and offset (int) -- REQUIRED
// limit is the # of businesses to return, offset is the list of returned business results by this amount
// e.g. Page 1 - limit 50, offset 0
//      Page 2 - limit 50, offset 50
//      Page 3 - limit 50, offset 100 and etc.
function addLimAndOffParam() {
    searchQuery += `&limit=10&offset=0`; // Need to find a way to increment the offset by 10 for every time we access 10 restaurants
}

// Need to consider the maximum number of restaurants to load (one at a time, load 10 restaurants at a time)

// price (string) -- Optional
// Give user the option to limit loaded restaurants based on the price.
// Type 1,2,3 to search for tiers 1, 2, and 3. Goes from 1 to 4 dollar signs.
function addPriceParam() {
  if (price) {
    searchQuery += `&price=${price}`; // Need to find a way to input 1, 1,2, 1,2,3, and 1,2,3,4 individually
  }
};


// open_now (boolean) -- Optional
// Returns only open
function addOpenNowParam() {
    searchQuery += "&open_now=true";
};


// TODO open_at (int) -- Optional
// If specified, will return businesses open at the given time (must present as unix time)
function addOpenAtParam() {
  if (openAt) { // Open at MUST be converted to unix time if we want this function
    searchQuery += `$open_at=${openAt}`;
  }
}

// Make the AJAX call

function getRestaurantData(searchQuery) {
  $.ajax({
    url: searchQuery,
    success: (res) => {
        let data = "";

        res.on("data", chunk => {
          data += chunk;
        });

        res.on("end", () => {
          console.log(JSON.parse(data).explanation);

          // create a data object of the restaurant info
          let completeData = JSON.parse(data);

          // build array of restaurant data and return it
          let restaurants = [];
          for (let i = 0; i < 10; i++) {
            let restaurant = {
              name: completeData[index].name,
              imgUrl: completeData[index].image_url
            };
            restaurants.push(restaurant);
          }
          return restaurants;
        });

        res.on("error", err => {
          if (err) throw err;
        });
      }
  });
  
  res.on("error", err => {
        if (err) throw err;
  });
};