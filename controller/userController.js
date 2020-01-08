/* ==================== START modules ==================== */

 const User = require('../service/userService');

/* ==================== END modules ==================== */

exports.user_create = function(request, response, next) {
    User.createUser(request, response, next);
};

exports.user_detail = function(request, response, callback) {
    User.getUserById(request, response, callback);
};

exports.user_login = function(request, response, next) {
    User.getLogin(request, response, next);
};

exports.user_update = function(request, response, callback) {
    User.updateById(request, response, callback);
};

exports.user_delete = function(request, response, callback) {
    User.deleteById(request, response, callback);
};