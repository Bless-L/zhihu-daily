const request = require('sync-request');
const fs = require("fs");

var res = request('GET', 'http://img.wmzhe.com/pics/3e/84/3e84c7e546d3c1c94d539dc0c2abf2a9.jpg')

writeImg(res.body)

function writeImg(res) {
  let imgData = ''



  fs.writeFileSync('./1.jpg', res, "binary", function(err){
    if(err){
      console.log("down fail")
    }
  })
}