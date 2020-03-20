var searchQuery = "https://api.yelp.com/v3/businesses/search"; // Make a GET request to this

// Parameters
// TODO Get values from text boxes? How do we cleanly acquire all of these from the user?

// TODO Term (string) (search term) -- REQUIRED
// just search "restaurant"
searchQuery += "?term=restaurant";

// TODO Location (string) -- REQUIRED
// TODO Need to provide as lat/long (decimal)
// so give user option to search for restaurants within a certain city?

// TODO Radius (int) -- Optional
// Suggested search radius in meters, probably convert kms to freedom units

// TODO Categories -- Optional
// Do we want users to be able to narrow it down to a type of food then search restaurants within that category?

// TODO limit and offset (int) -- REQUIRED
// limit is the # of businesses to return, offset is the list of returned business results by this amount
// e.g. Page 1 - limit 50, offset 0
//      Page 2 - limit 50, offset 50
//      Page 3 - limit 50, offset 100 and etc.
searchQuery += "/" + 50

// TODO price (string) -- Optional
// Type 1,2,3 to search for tiers 1, 2, and 3. Goes from 1 to 4 dollar signs.

// TODO open_now (boolean) -- Optional
// Returns only open restaurants

// TODO open_at (int) -- Optional
// If specified, will return businesses open at the given time (must present as unix time)

// TODO Make the GET request

