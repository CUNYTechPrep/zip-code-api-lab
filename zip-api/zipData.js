const fs = require('fs');
const parse = require('csv-parse/lib/sync');

const data = fs.readFileSync('./data/free-zipcode-database.csv');
const records = parse(data, { columns: true });


const byZip = {};
const byCity = {};

records.forEach((rec) => {
  if(byZip[rec.Zipcode] === undefined) {
    byZip[rec.Zipcode] = [];
  }
  byZip[rec.Zipcode].push(rec);

  if(byCity[rec.City] === undefined) {
    byCity[rec.City] = [];
  }
  byCity[rec.City].push(rec.Zipcode);
});


module.exports = { byZip, byCity };
