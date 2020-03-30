const yelp = require('yelp-fusion');
const client = yelp.client(process.env.api_key);

console.log(process.env.api_key)

async function getRestaurantData(cityName) {
  let searchData = await client.search({
    term: 'restaurant',
    location: cityName,
    radius: 16094,
    open_now: true,
    limit: 10,
    offset: 0,

  }).then((res) => {
    //console.log(res.jsonBody.businesses[0]);
    let restaurants = [];
    for (let i = 0; i < 10; i++) {
      let b = res.jsonBody.businesses[i];
      let restaurant = {
        name: b.name,
        imgUrl: b.image_url,
        price: b.price,
        latitude: b.coordinates.latitude,
        longitude: b.coordinates.longitude
      };
      restaurants.push(restaurant);
    }
    return restaurants;
  })
  .catch((err) => {
      if (err) throw err;
    });
  return searchData;
  };

module.exports.getRestaurantData = getRestaurantData;