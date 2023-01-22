const axios = require('axios');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */


const fetchMyIP = function(callback) { 
  axios.get('https://api.ipify.org?format=json')
    .then(res => {
      if (res.status !== 200) {
        return callback(Error(`Status Code ${res.status} when fetching IP: ${res.data}`), null);
      } else {
        return callback(null, res.data.ip);
      }
    })
    .catch(err => {
      return callback(err, null);
    })


};


fetchMyIP((err, ip) => {
  err ? console.log("It didn't work!", err) : console.log('It worked! Returned IP: ', ip);
});


module.exports = { fetchMyIP };