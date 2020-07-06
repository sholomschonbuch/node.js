const geoCode = require("./utils/geocode")
// const url = 'http://api.weatherstack.com/current?access_key=50c3425a935de97f85a8e5df91856740&query=37.8267,-122.4233&units=f'
// const errorURL = 'http://api.weatherstack.com/current?access_key=50c3425a935de97f85a8e5df91856740&query=&units=f'
// request({url: url, json: true}, (error, response) => {
//     //console.log(response)
//     // const data = JSON.parse(response.body)
//     // console.log(data.current)

//     //json formatter for chrome
//     // https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa/related?hl=en
//     //console.log(response.body.current)
    
//     // comment out crash line and check out error
//     if (error){
//         console.log("Unable to connect to Weather service.")
//     }else {
//         if(response.body.error){
//             console.log(response.body.error.info)
//         }else{
//             console.log("The Current temp is " + response.body.current.temperature)
//         }
//     }
// })




geoCode("new yourk", (error, data) => {
    console.log(data)
    console.log(error)

})
