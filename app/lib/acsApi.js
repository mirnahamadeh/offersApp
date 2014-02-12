

var Cloud = require('ti.cloud');


exports.login = function(params, fn){
	Cloud.Users.login(params, fn);
};

exports.regist = function(params, fn){
	Cloud.Users.create(params, fn);
};
