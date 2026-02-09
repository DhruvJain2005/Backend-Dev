const fs = require("fs");
const path=require('path');

const inputFile=path.join(__dirname, 'input.txt');
const outputFile=path.join(__dirname,'output.txt');

fs.readFile(inputFile,'utf-8',(err,data) => {
    if(err){
        console.error('Error reading the file:',err.message);
        return;
    }
    const words=data.trim().split(/\s+/).filter(Boolean);
    const count=words.length;

    fs.writeFile(outputFile,`word count: ${count}` , (err) =>{
        if(err){
            console.error('error writing to the file:' , err.message);
            return;

        }
        console.log('word count saved to wordcount.txt')

    });

});
