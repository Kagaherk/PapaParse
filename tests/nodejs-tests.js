var papaparse = require('../papaparse');
var fs = require('fs');

var stream = fs.createReadStream('tests/long-sample.csv');
papaparse.parse(stream, {
  streaming: true,
  chunk: function(chunk) {
    console.log(chunk);
  },
  complete: function(complete) {
    console.log('Done!');
  }
});