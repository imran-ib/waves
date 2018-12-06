let admin = (req, res, next) => {
  if (req.user.role === 0) {
    res.send("You are not allowed unless you are admin");
  }
  next();
};

module.exports = { admin };
