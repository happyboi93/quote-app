// Middleware - Check user is Logged in
const checkUserLoggedIn = (req, res, next) => {
    req.user ? next(): res.sendStatus(401);
  }

  module.exports = checkUserLoggedIn;