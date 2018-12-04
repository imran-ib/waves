const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  firstName: {
    type: String,
    required: true,
    maxlength: 60
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 60
  },
  cart: {
    type: Array,
    default: []
  },
  history: {
    type: Array,
    default: []
  },
  roll: {
    type: Number,
    default: 0
  },
  tocken: {
    type: String
  }
});

// ────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: H A S I N G   P A S S W O R D : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────
UserSchema.pre("save", function(next) {
  // ─── USER IS EQUAL TO "THIS" ──────────────────────────────────────────────────────
  var user = this;
  // ─── IF USER IS CHANGING THE PASSWORD WE WILL HASH IT ───────────────────────────
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) return next(err);
      // ─── GET USER PASSWORD AND HASH IT ──────────────────────────────────────────────
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        // Store hash in your password DB.
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
