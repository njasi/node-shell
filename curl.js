const request = require('request')
module.exports = curl

function curl(cmd) {
  let args = cmd.split(' ')
  console.log(args)
  if (args[0] === 'curl') {
    console.log('hi')
    request(args[1], (error, response, body) => {
      if (error) throw error
      process.stdout.write(body)
      process.stdout.write("\nprompt > ")
    })
  }

}
