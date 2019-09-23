module.exports = pwd;
const done = require ("./bash.js");
function pwd(cmd){
  if(cmd === "pwd"){
    done(process.cwd());
  }
}
