const fs = require("fs");
const util = require('util')

var file = 'temp_text.txt';
fs.open(file, 'w', function(err, fd){
	if(err) throw err;
	console.log('file open complete');
});

fs.readFile("./geoje_data_f.csv", "utf8", (err, data) => {
    const rowToData2 = data.split("\r\n");
	const data2Key = rowToData2[0].split(",");
    const userArray = [];

    for(let j = 0; j < rowToData2.length-1; j++){
        const dataObject = {};    
        for(let i = 0; i<rowToData2.length-1; i++){
            dataObject[data2Key[i]] = rowToData2[j+1].split(",\"")[i];
        }
        userArray.push(dataObject)
    }    
    fs.appendFileSync('temp_text.txt',JSON.stringify(userArray) ,'utf-8', function(error){
        console.log(util.inspect(userArray, false, null, false));
    });
})