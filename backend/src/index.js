const express= require("express")
const connect= require("./configs/db")
const mongoose = require("mongoose")

const app = express()
const port= 3500
app.listen(port, async () => {
    try {
        await connect()
        console.log(`listening at ${port}`)
    } catch (error) {
        console.log(error)
    }
})