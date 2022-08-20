const express= require("express")
const connect= require("./configs/db")
const cors = require("cors");
const { register, login } = require("./controllers/auth.controller");
const app = express()
 app.use(cors());
app.use(express.json());
 
const dotenv = require("dotenv");
dotenv.config();
app.post("/register", register);

app.post("/login", login);

app.get("/user", (req, res) => {
    return res.send("users")
})
const port = process.env.PORT || 3600

app.listen(port, async () => {
    try {
        await connect()
        console.log(`listening at ${port}`)
    } catch (error) {
        console.log(error)
    }
})