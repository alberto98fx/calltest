"use strict"

function getInfo(){
let getStdin = require('get-stdin');

let handle = (req) => {
return process.env.NODE_ENV;
};

getStdin().then(val => {
   handle(val);
}).catch(e => {
   return e.stack;
});
}
module.exports = getInfo;
