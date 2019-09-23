module.exports = ls;
const done = require ("./bash.js");
let fs = require ("fs");

function ls(cmd){
  if(cmd === "ls"){
    fs.readdir("./","utf8",(err, files)=> {
      if(err){
        throw err;
      } else {
        done(files.join("\n"))
      }
    })
  }
}
