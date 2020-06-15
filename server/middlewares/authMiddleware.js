// easiest way to do auth. will allow anyone logged in to do anything
// module.exports = function (req, res, next) {
//     if (req.session.user) {
//         next()
//     } else {
//         res.status(403).send('Please login')
//     }
//   }

module.exports = function (allowedRoles) {
    return function (req, res, next) {
      if (!req.session.user || !allowedRoles.includes(req.session.user.role_id)) {
        res.status(403).send('Unauthorized')
      } else {
        next()
      }
    }
  }
  