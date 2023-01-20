const axios = require('axios');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(retrieve) { 
  // use request to fetch IP address from JSON API
  axios.get('https://api.ipify.org?format=json')
    .then(res => {
      res.data && console.log(`They body of response is: ${res.data}`);
    })
    .catch(err => {
      console.log("Error: ", err);
    })
};

fetchMyIP();


// https://api.ipify.org?format=json

module.exports = { fetchMyIP };