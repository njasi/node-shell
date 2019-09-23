module.exports = cat
const done = require ("./bash.js");
const fs = require('fs')

function cat(cmd) {
  const pwd = process.cwd()
  const args = cmd.split(' ')
  if (args[0] === 'cat') {
    fs.readFile(`${pwd}/${args[1]}`, 'utf8', function (err, data) {
      if (err) throw err
      done(data)
    })

  }

}
