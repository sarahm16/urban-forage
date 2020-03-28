// const yelp = require('yelp-fusion');
// const client = yelp.client('CfJsK0imSbCC04VXKuXZP2fd6UwnnmroGUxGl3xKIimg8ytZBYh3AdZDkPa0JygWzXv2NuutlXHXc8G7thannqJI-PPKEYOHynD_BR8_082Hyx6e_AIQtgvWmCN8XnYx');
const yelpKey = 'CfJsK0imSbCC04VXKuXZP2fd6UwnnmroGUxGl3xKIimg8ytZBYh3AdZDkPa0JygWzXv2NuutlXHXc8G7thannqJI-PPKEYOHynD_BR8_082Hyx6e_AIQtgvWmCN8XnYx';
const mapKey = "JprhJCXYJMxRCpTODmFal0wPQh9T04hp"; // NEED TO ENCRYPT KEYS BUT HOW DO I DO THAT
var mapQuery = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapKey}&location=`;

const axios = require('axios');

async function main(cityName) {
    let searchString = await buildSearchQuery(cityName);
    getRestaurantData(searchString);
};

async function buildSearchQuery(cityName) {
    searchQuery = "https://api.yelp.com/v3/businesses/search?";
    searchQuery = addStringParam(searchQuery, cityName);  // FUNCTIONAL
    return searchQuery;
}

function addStringParam(searchQuery, cityName) {
  searchQuery += "term=restaurant";
  getCityLatLong(searchQuery, cityName)
};

function getCityLatLong(searchQuery, cityName) {
  mapQuery += cityName;
  console.log(typeof (mapQuery), mapQuery);
  axios.post(mapQuery)
    .then((res) => {
      // handle success DJ KHALED
      let data = '';
      let latitude;
      let long;
      let temp;

      res.on('data', (chunk => {
        data += chunk;
      }));

      res.on('end', () => {
        completeData = JSON.parse(data);

        console.log(completeData);

        latitude = completeData.results[0].locations[0].displayLatLng.lat;
        long = copmleteData.results[0].locations[0].displayLatLng.lng;

        temp = `&latitude=${latitude}&longitude=${long}`;
        searchQuery += temp;
      })
        .catch((err) => {
          if (err) throw err;
        })
        .then(() => {
          console.log("Got the data");
        });
    })
}

  //   axios('http://www.mapquestapi.com/geocoding/v1/address?key=JprhJCXYJMxRCpTODmFal0wPQh9T04hp&location=Seattle', {
  //     method: 'post',
  //     responseType: 'stream'
  //   })
  //     .then((res) => {
  //       console.log(`before: ${searchQuery}`);
  //       let data = '';
  //       let latitude;
  //       let long;
  //       let temp;
  //
  //       res.on('data', (chunk => {
  //         data += chunk;
  //       }));
  //
  //       res.on('end', () => {
  //         completeData = JSON.parse(data);
  //
  //         console.log(completeData);
  //
  //         latitude = completeData.results[0].locations[0].displayLatLng.lat;
  //         long = copmleteData.results[0].locations[0].displayLatLng.lng;
  //
  //         temp = `&latitude=${latitude}&longitude=${long}`;
  //         searchQuery += temp;
  //         console.log(`after: ${searchQuery}`);
  //
  //       });
  //     });
  //   addRadiusParam(searchQuery);
  // };

function addRadiusParam(searchQuery) {
  searchQuery += '&radius=16094';
  addLimAndOffParam(searchQuery);
};


// limit and offset (int) -- REQUIRED
// limit is the # of businesses to return, offset is the list of returned business results by this amount
// e.g. Page 1 - limit 50, offset 0
//      Page 2 - limit 50, offset 50
//      Page 3 - limit 50, offset 100 and etc.
function addLimAndOffParam(searchQuery) {
  searchQuery += `&limit=10&offset=0`; // Need to find a way to increment the offset by 10 for every time we access 10 restaurants
  addOpenNowParam(searchQuery);
}

// Need to consider the maximum number of restaurants to load (one at a time, load 10 restaurants at a time)

function addOpenNowParam(searchQuery) {
  searchQuery += "&open_now=true";
  getRestaurantData(searchQuery);
};

async function getRestaurantData(searchQuery) {
  axios({
    method: 'get',
    url: searchQuery,
    responseType: 'stream',
    headers: {
      'Authorization': `Bearer ${yelpKey}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  })
      .then(async (res) => {

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          let completeData = JSON.parse(data);

          let restaurants = [];
          for (let i = 0; i < 10; i++) {
            let restaurant = {
              name: completeData[index].name,
              imgUrl: completeData[index].image_url
            };
            restaurants.push(restaurant);
          }
          console.log(restaurants);
          return restaurants;
        })
      })
      .catch((err) => {
        if (err) throw err;
      })
      .then(() => {
        console.log('Pushing restaurants into array');
      })
  };

module.exports.main = main;



