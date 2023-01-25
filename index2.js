
const { fetchMyIP, fetchCoordsByIP, fetchIssTimes, nextISSTimesForMyLocation } = require('./iss_promised');
// const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((err, ip) => {
//   // err ? console.log("It didn't work!", err) : ip;
//   if (err) {
//     console.log("It didn't work!", err);
//   } else {
//     console.log("ip is: ", ip);
//   }
// });

// '76.70.114.179'
// const { latitude, longitude } = { latitude: 43.467517, longitude: -79.6876659 };


fetchMyIP()
  .then(body => console.log(body.data.ip));



// const printPassTimes = function(passTimes) {
//   for (const pass of passTimes) {
//     const datetime = new Date(0);
//     datetime.setUTCSeconds(pass.risetime);
//     const duration = pass.duration;
//     console.log(`Next pass at ${datetime} for ${duration} seconds!`);
//   }
// }

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   printPassTimes(passTimes);
// });



