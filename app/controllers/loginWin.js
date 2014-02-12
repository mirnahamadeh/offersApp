var args = arguments[0] || {};
function login(e) {
	
	Cloud.Users.login({
    login: $.txtName.value,
    password: $.txtPass.value
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
            var newWin1 = Alloy.createController('mainTabGroup', {
		//val : $.lbname.text
	});
	newWin1.getView().open();
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
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
