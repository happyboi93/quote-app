// Middleware - Check user is Logged in
const isLoggedIn = (req, res, next) => {
    req.user ? next(): res.sendStatus(401);
  }

  module.exports = isLoggedIn;