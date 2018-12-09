const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Product } = require("../models/prodectModel");
const { auth } = require("../middleware/auth");
const { admin } = require("../middleware/admin");

//
// ──────────────────────────────────────────────────────────────── I ──────────
//   :::::: C R E A T E   P R D O D U C T : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
//
router.post("/article", auth, admin, async (req, res) => {
  try {
    const product = await new Product(req.body);
    await product.save();
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
});

//
// ──────────────────────────────────────────────────────────── II ──────────
//   :::::: G E T   P R D O D U C T : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
//

// ────────────────────────────────────────────────────────────────────────────────
router.get("/all_articles", async (req, res) => {
  try {
    const products = await Product.find({})
      .populate("wood")
      .populate("brand")
      .exec();
    res.json({ success: true, products });
  } catch (error) {
    res.json({ success: false, error });
    console.log(error);
  }
});
// ────────────────────────────────────────────────────────────────────────────────

//
// ────────────────────────────────────────────────────────────────────────────────────────────────── III ──────────
//   :::::: G E T T I N G   P R O D U C T S   B Y   I D   O R   I D S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────
// from client side we will send a id or multiple ids and type of single or array with query string
// if we send one id then with it type single
// it multiple ids then the type will be array

router.get("/article_by_id", async (req, res) => {
  try {
    // get type from query
    let type = req.query.type;
    let items = req.query.id;
    // split the ids
    let slpitedItems = items.split(",");
    //check the type
    if (type === "array") {
      items = [];
      items = slpitedItems.map(item => {
        return mongoose.Types.ObjectId(item);
      });

      let products = await Product.find({ _id: { $in: items } })
        .populate("wood")
        .populate("brand")
        .exec();
      res.json({ success: true, products });
    }
  } catch (error) {
    res.status(400).json({ success: false, error });
    console.log(error);
  }
});

//
// ──────────────────────────────────────────────────────────────────────────────────────── III ──────────
//   :::::: S O R T   B Y   D A T A   A N D   A R R I V A L : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────
// we need to sort the products by by data and solds
//
// ─── BY ARRIVAL  THIS WILL COME FROM TIMESTAMP ──────────────────────────────────
// article?sortBy=createdAt&order=desc&limit=4

// ─── BY SOLD    WE HAVE THIS IS COLLECTION ──────────────────────────────────────
// article?sortBy=sold&order=desc&limit=4
//
// we are creating variables sortBy,order,limit and we will be getting values from clientside
router.get("/articles", async (req, res) => {
  try {
    // get sort order and limit from query
    let sortBy = req.query.sortBy || "_id";
    let order = req.query.order || "asc";
    //limit must be a numaric value
    let limit = parseInt(req.query.limit) || 100;

    const product = await Product.find({})
      .populate("wood")
      .populate("brand")
      .sort([[sortBy, order]])
      .limit(limit)
      .exec();
    res.send(product);
  } catch (error) {
    res.json({ success: false, error });
    console.log(error);
  }
});

// ────────────────────────────────────────────────────────────────────────────────
module.exports = router;
