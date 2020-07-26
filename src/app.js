const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const port = process.env.PORT || 3000

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
    if (!req.query.address) {
        return res.send({
            error: "plz use address"
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location}) => {
        if (error) {
            return res.send({
                error: "error does not work!"
            })
        }
        forecast(latitude, longitude,(error, response) => {
            console.log(longitude, latitude)
            if (error) {
                return res.send({
                    error: "we dont know"
                })
            }
            return res.send({
                forcast: response,
                address: req.query.address,
                location: location
            })
        })
    })
})
app.get("/test", (req, res) => {
    if (req.query.temp){
        return res.send(req.query.temp)

    }
    res.send("error!")
    
    
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

app.listen(port, () => {
    console.log("server up!")
}) 
