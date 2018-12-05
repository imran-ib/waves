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
  // method to check password is defined in user schema
  user.comparePasswrod(req.body.password, (err, isMatch) => {
    // if password don't match
    if (!isMatch)
      return res.json({ loginSucces: false, message: "Wrong Password" });

    // if password match we will generate a tocken
    user.generateTocken((err, user) => {
      if (err) return res.status(400).send(err);
      // if everything goes ok then we will store the token as cookie
      res
        .cookie("w-auth", user.token)
        .status(200)
        .json({ loginSucces: true });
    });
  });
});

module.exports = router;
