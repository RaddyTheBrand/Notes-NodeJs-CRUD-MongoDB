exports.isLoggedIn = function (req, res, next) {
  if(req.user) {
    next();
  } else {
    return res.status(401).send('Access Denied');
  }
}