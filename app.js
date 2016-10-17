var fs = require('fs')

var readjson = require(__dirname + '/json-file-reader.js')



readjson('countries.json', function searchCountry(countriesObject) {
	for (var i = 0; i < countriesObject.length; i++) {
				//object[index].key wanneer je Afghanistan invoert is dat dus:
				//countriesObject[0].name === Afghanistan
				if(countriesObject[i].name === process.argv[2]){
					//je zit nu in object[0], dus als je bij value van name kan kan je 
						//bij value van topLevelDomain
					console.log("Country: " + countriesObject[i].name + 
						"\nTop Level Domain: " + countriesObject[i].topLevelDomain);
				}
		}

})


// console.log(searchCountry('/countries.json', jsonFileReader))

// //read the JSON file throw error / read data
// fs.readFile(__dirname + '/countries.json', 'utf8', function(err, data){
// 		if (err) {
// 			throw err;
// 		}
// 		//save data in object you declare
// 		//JSON parse data into JavaScript object (an array is also an object)
// 		var countriesObject = JSON.parse(data);
// 		//loop through new JS object (an array in this case so not a for/in loop)
// 		for (var i = 0; i < countriesObject.length; i++) {
// 				//object[index].key wanneer je Afghanistan invoert is dat dus:
// 				//countriesObject[0].name === Afghanistan
// 				if(countriesObject[i].name === process.argv[2]){
// 					//je zit nu in object[0], dus als je bij value van name kan kan je 
// 						//bij value van topLevelDomain
// 					console.log("Country: " + countriesObject[i].name + 
// 						"\nTop Level Domain: " + countriesObject[i].topLevelDomain);
// 				}
// 		}
// });

//maak module van readfile tot JSON parse -> uitkomst export.

//in app countries readen zeg je welke file en de plaats. dus app krijgt twee parameters. file en callback (of module)

/* Part 1 Create a Node.js application that does the following: 
Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array process.argv
Reads and parses the countries.json file. Note: you must use readFile and not readFileSync.
Outputs information about that specific country. Must be in the following format: Country: Top Level Domain: 

Part 2

For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

// */




