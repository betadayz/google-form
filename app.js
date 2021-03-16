const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config()
const userRoutes = require("./routes/user")
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cookieParser = require("cookie-parser");



mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateindex: true
}).then(() => console.log("DB Connected"));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());



app.use("/api", userRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})