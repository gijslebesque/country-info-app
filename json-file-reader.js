var fs = require('fs')

function readjson (filename, callback) { 
	fs.readFile(__dirname + '/' + filename, 'utf8', function(err, data) {
		if (err) {throw err}
			var countriesObject = JSON.parse(data)
		callback (countriesObject)
		})
}

module.exports = readjson


// fs.readFile(__dirname + '/countries.json', 'utf8', function(err, data) {
// 	if (err) throw err
// 		var countriesObject = JSON.parse(data) // declare variable that contains array created by JSON.parse
// 	for(var i = 0; i < countriesObject.length; i++) { // loop through array. Every object is [i]
// 		if(countriesObject[i].name === process.argv[2]) // add .name to excess the key of the object. process.argv[2] is command list parameter
// 			console.log("Country: " + countriesObject[i].name + "\nTop Level Domain: " + countriesObject[i].topLevelDomain)
// 		}
// })
