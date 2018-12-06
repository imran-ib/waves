const express = require("express");
const router = express.Router();

const { Wood } = require("../models/woodModle");
// ─────────────────────────────────────────────────────────────── MIDLEWARES ─────
const { admin } = require("../middleware/admin");
const { auth } = require("../middleware/auth");

//
// ──────────────────────────────────────────────────────────────── I ──────────
//   :::::: C R E A T E   WOOD : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
//

router.post("/wood", auth, admin, async (req, res) => {
  const wood = await new Wood(req.body);
  wood.save((err, wood) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true, wood: wood });
  });
});

//
// ──────────────────────────────────────────────────────────── II ──────────
//   :::::: G E T   WOODS : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
//

router.get("/woods", (req, res) => {
  Wood.find({}, function(err, woods) {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, woods });
  });
});

// ────────────────────────────────────────────────────────────────────────────────
module.exports = router;
