
// const { fetchMyIP, fetchCoordsByIP, fetchIssTimes, nextISSTimesForMyLocation } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((err, ip) => {
//   // err ? console.log("It didn't work!", err) : ip;
//   if (err) {
//     console.log("It didn't work!", err);
//   } else {
//     console.log("ip is: ", ip);
//   }
// });


// fetchCoordsByIP('76.70.114.179', (err, data) => {
//   // err ? console.log("Error occurred!", err) : console.log('Lat: ', data.latitude, 'Long: ', data.longitude);
//   err && console.log("Error occurred!", err);
//   console.log('The coordinates are: ', data);
// });



// const { latitude, longitude } = { latitude: 43.467517, longitude: -79.6876659 };

// fetchIssTimes({ latitude, longitude }, (err, data) => {
//   err && console.log("error happ'd!", err);
//   console.log('Flyover times: \n', data);
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});




// https://api.ipify.org?format=json