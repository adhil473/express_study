const express = require("express")
const connection = require("./mongoDb/config")
const router = require("./router/userRouter")
const app = express()
const cors = require("cors")


connection()

app.use(cors())
app.use(express.json())
app.use('/auth',router)


const PORT = 8070
app.listen(PORT,console.log(`server is running successfully on ${PORT} `))