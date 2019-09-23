const pwd = require ("./pwd.js")
const ls = require ("./ls.js")

process.stdout.write("prompt > ");

process.stdin.on('data', (test)=>{
  const cmd = test.toString().trim();
  // process.stdout.write("You typed: "+cmd);
  pwd(cmd);
  ls(cmd);

});

