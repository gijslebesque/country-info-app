var fs = require('fs')

fs.readFile(__dirname + '/countries.json', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
})