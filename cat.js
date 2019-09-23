module.exports = cat
const fs = require('fs')

function cat(cmd) {
  const pwd = process.cwd()
  const args = cmd.split(' ')
  if (args[0] === 'cat') {
    fs.readFile(`${pwd}/${args[1]}`, 'utf8', function (err, data) {
      if (err) throw err

      process.stdout.write(data)
      process.stdout.write("\nprompt > ");
    })

  }

}
