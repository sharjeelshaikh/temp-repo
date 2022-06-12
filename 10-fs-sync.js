//the above destructuring can also be done as follows - 
// const fs = require('fs');
// fs.readFileSynce or fs.writeFileSync

const {readFileSync,writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt',
    `Here is the new result : ${first} and ${second}`
    // {flag: 'a'} used to append the values
)
console.log('done with this task');
console.log('starting the next one');




