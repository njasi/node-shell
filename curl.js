const request = require('request')
const done = require ("./bash.js");
module.exports = curl

function curl(cmd) {
  let args = cmd.split(' ')
  if (args[0] === 'curl') {
    request(args[1], (error, response, body) => {
      if (error) throw error
      done(body)
    })
  }

}
