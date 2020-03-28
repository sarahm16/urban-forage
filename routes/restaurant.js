const yelp = require('yelp-fusion');
const client = yelp.client('CfJsK0imSbCC04VXKuXZP2fd6UwnnmroGUxGl3xKIimg8ytZBYh3AdZDkPa0JygWzXv2NuutlXHXc8G7thannqJI-PPKEYOHynD_BR8_082Hyx6e_AIQtgvWmCN8XnYx');

function main(cityName) {
    getRestaurantData(cityName);
};

function getRestaurantData(cityName) {
  client.search({
    term: 'restaurant',
    location: cityName,
    radius: 16094,
    open_now: true,
    limit: 10,
    offset: 0,

  }).then((res) => {
    let restaurants = [];
    for (let i = 0; i < 10; i++) {
      let restaurant = {
        name: res.jsonBody.businesses[i].name,
        imgUrl: res.jsonBody.businesses[i].image_url
      };
      restaurants.push(restaurant);
    }
    return restaurants;
  })
  .catch((err) => {
      if (err) throw err;
    });
  };

module.exports.main = main;