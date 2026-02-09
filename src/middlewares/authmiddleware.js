// function isAuthenticated(req, res, next) {
//   if (!req.session || !req.session.user) {
//     return res.redirect("/login");
//   }
//   next();
// }

// module.exports = { isAuthenticated };
module.exports = function isLoggedIn(req, res, next) {
  if (!req.session || !req.session.user) {
    return res.redirect('/login');
  }
  next();
};
