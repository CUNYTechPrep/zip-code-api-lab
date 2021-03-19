const fs = require('fs');
const parse = require('csv-parse/lib/sync');

const data = fs.readFileSync('./data/free-zipcode-database.csv');
const records = parse(data, { columns: true });


const byZip = [];
const byCity = [];

// records.forEach((rec) => {
//   if(byZip[rec.Zipcode] === undefined) {
//     byZip[rec.Zipcode] = [];
//   }
//   byZip[rec.Zipcode].push(rec);

//   if(byCity[rec.City] === undefined) {
//     byCity[rec.City] = [];
//   }
//   byCity[rec.City].push(rec.Zipcode);
// });

// Fills byZip array with an object for every city with a matching zipcode
function getZipcodeData(zc) {
  let myZip = zc;

  records.forEach((rec) => {
    if (rec.Zipcode === myZip) {
      // if(byZip[myZip] === undefined) {
      //   byZip[myZip] = [];
      // }
      byZip.push(rec);
    }
  });
}

// Fills myCity array with all zipcodes for that city
function getCityData(c) {
  let myCity = c;

  records.forEach((rec) => {
    if (rec.City === myCity) {
      // if (byCity[myCity] === undefined) {
      //   byCity[myCity] = [];
      // }
      byCity.push(rec.Zipcode);
    }
  });
}

// Empties byZip array
function resetZipcodeData() {
  byZip.length = 0;
  // byZip.forEach(() => {
  //   byZip.pop();
  // })
  // for (let prop in byZip) delete byZip[prop];
}

// Empties byCity array
function resetCityData() {
  byCity.length = 0;
  // byCity.forEach(() => {
  //   byCity.pop();
  // })
  // for (let prop in byCity) delete byCity[prop];
}

module.exports = { getZipcodeData, resetZipcodeData, getCityData, resetCityData, byZip, byCity };
