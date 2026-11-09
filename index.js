const express = require("express")
require("dotenv").config()
const cors = require("cors")
const productRouter = require("./router/product.routes")

const app = express()
const PORT = process.env.PORT || 4001
app.use(cors())
app.use(express.json())



//router
app.use(productRouter)

app.listen(PORT, () => {
    console.log("Server is running at:" + PORT);

})
