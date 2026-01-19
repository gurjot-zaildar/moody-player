const express = require("express")
const songRoutes = require("./routes/song.routes")
const cors = require("cors")


const app= express()
app.use(cors({
    origin:"https://moody-player-orcin.vercel.app"
}));
app.use(express.json())

app.use("/",songRoutes)


module.exports = app;