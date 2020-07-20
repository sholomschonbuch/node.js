const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")

app.use(express.static(path.join(__dirname, "../public")))
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

app.get("", (req, res) => {
    res.render("index", {
        title: "weather app!!!",
        name: "jake"

    })
})
app.get("/weather", (req, res) => {
    res.send({
        temp: 96,
        loc: "ny"
    })
})
app.get("/about", (req, res) => {
    res.render("about", {
        title: "about page!"
    })
})
app.get("/help", (req, res) => {
    res.render("help", {
        title: "help page"
    })
})
app.get("*", (req, res) => {
    res.render("404", {
        title: "page not found"
    })
})

app.listen(3000, () => {
    console.log("server up!")
}) 
