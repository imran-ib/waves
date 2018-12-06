const express = require("express");
const router = express.Router();

const { User } = require("../models/userModel");
const { Brand } = require("../models/brandModel");
// ─────────────────────────────────────────────────────────────── MIDLEWARES ─────
const { admin } = require("../middleware/admin");
const { auth } = require("../middleware/auth");

//
// ──────────────────────────────────────────────────────────────── I ──────────
//   :::::: C R E A T E   B R A N D : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
//

router.post("/brand", auth, admin, async (req, res) => {
  const brand = await new Brand(req.body);
  brand.save((err, brand) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true, brand: brand });
  });
});

//
// ──────────────────────────────────────────────────────────── II ──────────
//   :::::: G E T   B R A N D S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
//

router.get("/brands", (req, res) => {
  Brand.find({}, function(err, brnads) {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, brnads });
  });
});

// ────────────────────────────────────────────────────────────────────────────────
module.exports = router;
