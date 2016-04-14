var User = require('./userModel.js');
var Q = require('q');

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {
  signup: function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    findUser({username: username})
    .then(function(user) {
      if (user) {
        next(new Error('User exists in DB!'));
      } else {
        return createUser({
          username: username,
          password: password
        });
      }
    })
    .catch(function (err) {
      next(err);
    });
  }
};
