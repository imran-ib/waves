const express = require("express");
const router = express.Router();

const { User } = require("../models/userModel");
// ──────────────────────────────────────────────────────── I ──────────
//   :::::: R E G I S T E R : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────

router.post("/register", async (req, res) => {
  let user = new User(req.body);
  try {
    let newlyCreatedUser = await user.save();
    return res.status(200).json({ registerSuccess: true, newlyCreatedUser });
  } catch (error) {
    return res.json({ registerSuccess: false, error });
  }
});

//
// ────────────────────────────────────────────────── II ──────────
//   :::::: L O G I N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

router.post("/login", async (req, res) => {
  //find userByEmail if exists
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.json({ loginSucess: false, message: "No User Foud" });
  }
  //Check Password

  return res.json({ loginSucess: true, message: "Welocome Back" });
});

module.exports = router;
