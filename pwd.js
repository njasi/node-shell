module.exports = pwd;
const done = require ("./bash.js");
console.log(done)
function pwd(cmd){
  if(cmd === "pwd"){
    done(process.cwd());
  }
}
