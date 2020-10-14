const express = require("express")
const { byZip, byCity } = require("./zipData")
const app = express()

const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.json({ test: "Yay" })
})

app.get("/zip/:zipcode", (req, res) => {
    const { zipcode } = req.params

    const result = byZip[zipcode]

    if (!result) {
        return res.sendStatus(404)
    }

    return res.json(result)
})

app.get("/city/:cityname", (req, res) => {
    const { cityname } = req.params

    const result = byCity[cityname]

    if (!result) {
        return res.sendStatus(404)
    }

    return res.json(result)
})

app.listen(PORT, () => {
    console.log(`zip-api is up and running on ${PORT}`)
})
