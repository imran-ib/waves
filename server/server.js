const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const mongoose = require("mongoose");
// ─────────────────────────────────────────────────────────────────── ROUTES ─────
var UserRoutes = require("./routes/UserRoutes");
var BrandsRoutes = require("./routes/brandsRoutes");
var WoodsRoutes = require("./routes/woodsRoutes");
var ServerRoutes = require("./routes/productRoutes");

// ─── DOTENV ─────────────────────────────────────────────────────────────────────
require("dotenv").config();
// ─── DATABASE ───────────────────────────────────────────────────────────────────
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true }
);

// ─── MIDDLEWARES ────────────────────────────────────────────────────────────────
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// ─────────────────────────────────────────────────────────────────── ROUTES ─────
app.use("/api/user", UserRoutes);
app.use("/api/product", ServerRoutes);
app.use("/api/product", BrandsRoutes);
app.use("/api/product", WoodsRoutes);

// ─────────────────────────────────────────────────────────────────── SERVER ─────
PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
