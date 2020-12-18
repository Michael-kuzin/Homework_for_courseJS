let os = require('os')

function Greatings() {
  let today = new Date();
  var hours = today.getHours();
  let greating;
  if(hours >= 23 && hours <= 5) {
     greating = "Good night"
  } else if (hours >= 5 && hours <= 11) {
    greating ="Good morning"
  } else if (hours >= 11 && hours <= 17) {
    greating ="Good day"
  } else {
    greating ="Good evening"
  }

return `Data of request ${today}
${greating}: ${os.userInfo().username}`
}

module.exports = Greatings();
