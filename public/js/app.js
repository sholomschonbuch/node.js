console.log("client side")
const weather = document.querySelector("form")
const search = document.querySelector("input")
const p1 = document.querySelector("#location")
const p2 = document.querySelector("#weather")

weather.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(search.value)
    fetch("http://localhost:3000/weather?address="+search.value).then((response) => {
        response.json().then(
            (data) => {
                if (data.location) {
                    p1.textContent = data.location
                    console.log(data)
                    p2.textContent = data.forcast

                }
            }
        )
    })
})