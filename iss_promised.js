const axios = require('axios');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */


// const fetchMyIP = (callback) => { 
//   axios.get('https://api.ipify.org?format=json')
//     .then(res => {
//       if (res.status !== 200) {
//         return callback(Error(`Status Code ${res.status} when fetching IP: ${res.data}`), null);
//       } else {
//         return callback(null, res.data.ip);
//       }
//     })
//     .catch(err => {
//       return callback(err, null);
//     });
// };



// fetchMyIP((err, ip) => {
//   err ? console.log("It didn't work!", err) : console.log('It worked! Returned IP: ', ip);
// });


// const fetchCoordsByIP = (ip, callback) => {
//   axios.get(`http://ipwho.is/${ip}`)
//     .then(res => {
//       if (!res.data.success) {
//         return callback(Error(`${res.data.message}: ${res.data.ip}`), null);
//       } else {
//         const { latitude, longitude } = res.data;
//         return callback(null, { latitude, longitude }); 
//       }
//     })
//     .catch(err => {
//       return callback(err, null);
//     });
// };




// const fetchIssTimes = (coords, callback) => {
//   const { latitude, longitude } = coords;
//   axios.get(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)
//     .then(res => {
//       if (res.data.message !== 'success') {
//         return callback(Error(`Error occurred: ${res.data.message}`), null);
//       } else {
//         return callback(null, res.data.response);
//       }
//     })
//     .catch(err => {
//       return callback(err, null);
//     });
// };

const fetchMyIP = function() {
  return axios.get('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  // console.log("fed into axios: ", body.data.ip);
  return axios.get(`http://ipwho.is/${body.data.ip}`);
};

const fetchIssTimes = function(coords) {
  const { latitude, longitude } = coords.data;
  // console.log({ latitude, longitude });
  return axios.get(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchIssTimes)
    .then(body => {
    // console.log("fetchCoords gives: ", body);
    return body.data.response;
  });
};



// const nextISSTimesForMyLocation = function(callback) {
//   fetchMyIP((err, ip) => {
//     if (err) {
//       return callback(err, null);
//     } 
//     fetchCoordsByIP(ip, (err, location) => {
//       err && callback(err, null);
//       fetchIssTimes(location, (err, nextPasses) => {
//         err && callback(err, null);
//         callback(null, nextPasses);
//       });
//     });
//   });
// };




// module.exports = { fetchMyIP, fetchCoordsByIP, fetchIssTimes };
module.exports = { nextISSTimesForMyLocation };