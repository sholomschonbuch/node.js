

const alpha = ["a","b","c"]

const result = alpha.filter( (letter) =>{
    return letter === "c"
})
console.log(result)

const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            long: 0
        }
        callback(data)
    }, 2000);
}
geoCode("new york", (data) => {
    console.log(data)
})