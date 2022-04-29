// Middleware to check the password and check if it is authenticated, The
// code is gotten from open source DWRSC Youtube channel. The reference can be found in README.md

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = {
  checkNotAuthenticated,
  checkAuthenticated,
};
