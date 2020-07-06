const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamJsMTA1IiwiYSI6ImNrYzk1b2JkOTE0M2wyenFwaHQ4azFncDEifQ.LBYdCI4pG4mQ5TShur_bSQ&limit=1'
    request({url: url, json: true}, (error, response) => {
        if (error){
            callback("matBoxdown", undefined)
            
        }
        else{
            callback(undefined, response.body.features[0])
        }
    })
}

module.exports = geoCode