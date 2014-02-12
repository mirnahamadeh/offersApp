var args = arguments[0] || {};
function openwin (e) {
  
}

var rows = [];

for(var i = 0; i< 10; i++){
	var row = Ti.UI.createTableViewRow({
		
	});
	
	var v = Ti.UI.createView({
		
	});
	
	row.add(v);
	rows.push(row);
}

$.viewrow1.data = rows;
