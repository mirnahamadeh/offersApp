var args = arguments[0] || {};
var api = require("api");
//alert("hello "+ )
//$.lbl.text = args.val;

function regist() {
	api.create({
		username : $.txtName.value,
		password : $.txtPass.value,
		password_confirmation : $.txtRepPass.value,
	}, function(e) {
		if (e.success) {
			// user created successfully
			alert("create success");
			$.win2.close();
			var newWin1 = Alloy.createController('mainTabGroup', {
				
			});
			newWin1.getView().open();
		} else {
			alert("oops, something went wrong");
		}
	});

}

function back() {
	$.win2.close();

}
