const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

//Use of these libraries are used to parse incoming JSON
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const PORT = 3001               // ou "port" in small letters, as we want

const names = [
    {name: "Marion"},
    {name: "Vincent"},
    {name: "Eric"}
]

app.get("/", (req, res) => {
    res.status(200).json(names)
})

app.post("/new", (req, res) => {
    names.push(req.body)
    res.status(200).json(req.body)
})

app.delete("/delete/:name", (req, res) => {
    names.splice(names.findIndex(e => e.name===req.params.name), 1)
    console.log(names) // This is just to test that value is removed from the array.
    res.status(200).json(req.params.name)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})