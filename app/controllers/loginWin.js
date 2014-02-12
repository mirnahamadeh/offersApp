var args = arguments[0] || {};
function login(e) {
   var newWin1 = Alloy.createController('mainTabGroup', {
	val : $.lbname.text
	});
	newWin1.getView().open();
}

function register(e) {
   var newWin = Alloy.createController('register', {
		val : $.lbname.text
	
	});
	newWin.getView().open();
}
function openwin(e) {
	 
	
}
