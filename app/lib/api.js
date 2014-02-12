var backend = require('acsApi');
exports.login = function(param, fn){
	backend.login(param, fn);
};


exports.create = function(param, fn){
	backend.regist(param, fn);
};


