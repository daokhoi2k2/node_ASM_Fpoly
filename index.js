const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

dotenv.config();
app.set('view engine', 'ejs');
app.use(express.static('public'))
mongoose.connect(process.env.MONGO_URL);

const adminRoute = require("./routes/admin.route");
const apiRoute = require("./routes/api.route");

app.use('/admin', adminRoute);

app.use('/api', apiRoute);

app.get("/", (req, res) => {
  res.render("main");
})

app.listen(PORT, () => {
  console.log(`App is running at PORT ${PORT}`);
});
