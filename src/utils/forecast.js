const request = require('request')
const forecast = (lat, long, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=50c3425a935de97f85a8e5df91856740&query=' + lat + ',' + long + '&units=f'
    request({url: url, json: true}, (error, response) => {
        if (error){
            callback("Can't connect to weather service!")
        }else {
            if(response.body.error){
                callback("Can't find location!")
            }else{
                callback(undefined, "The Current temp is " + response.body.current.temperature)
            }
        }
    })

}

module.exports = forecast