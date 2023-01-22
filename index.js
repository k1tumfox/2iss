
const { fetchMyIP } = require('./iss');


fetchMyIP((err, ip) => {
  err ? console.log("It didn't work!", err) : console.log('It worked! Returned IP: ', ip);
});



// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// https://api.ipify.org?format=json