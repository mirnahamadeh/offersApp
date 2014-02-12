var args = arguments[0] || {};
var api = require('api');

function login(e) {
	Ti.API.info('Logging in ');
	api.login({
		login : $.txtName.value,
		password : $.txtPass.value
	}, function(e) {
		if (e.success) {
			var user = e.users[0];
			alert("success");
			var newWin1 = Alloy.createController('mainTabGroup', {
				//val : $.lbname.text
			});
			newWin1.getView().open();
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}

	});

}

function register(e) {
	var newWin = Alloy.createController('register', {
		//val : $.lbname.text

	});
	newWin.getView().open();
}

function openwin(e) {

}
