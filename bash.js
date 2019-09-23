const pwd = require("./pwd.js")
const ls = require("./ls.js")
const cat = require('./cat.js')
const curl = require('./curl.js')

process.stdout.write("prompt > ");

process.stdin.on('data', (test) => {
  const cmd = test.toString().trim();
  // process.stdout.write("You typed: "+cmd);
  pwd(cmd);
  ls(cmd);
  cat(cmd)
  curl(cmd)

});
