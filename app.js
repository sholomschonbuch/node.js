const request = require("request")
const url =  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamJsMTA1IiwiYSI6ImNrYzk1b2JkOTE0M2wyenFwaHQ4azFncDEifQ.LBYdCI4pG4mQ5TShur_bSQ"

request({url: url, json: true},(error, response) => {
    console.log(response.body.features[0].center[0])
})