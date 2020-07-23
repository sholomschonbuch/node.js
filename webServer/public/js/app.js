console.log("client side")
const weather = document.querySelector("form")
const search = document.querySelector("input")

weather.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(search.value)
    fetch("http://localhost:3000/weather?address="+search.value).then()