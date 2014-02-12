var args = arguments[0] || {};
function openwin(e) {

}

var rows = [];

for (var i = 0; i < 10; i++) {
	var row = Ti.UI.createTableViewRow({
		backgroundColor : 'white',
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		left : 0,
		top : 20,
		layout : "vertical"
	});

	var v = Ti.UI.createView({
		backgroundColor : 'white',
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		left : 0,
		top : 0,
		layout : "horizontal"
	});

	var im = Ti.UI.createImageView({
		width : 50,
		height : 70,
		left : 20,
		top : 0,
		image:"/imageview.jpeg"
	});

	var title = Ti.UI.createLabel({
		text : "row1",
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		left : 70,
		top : 10,
		font : {
			fontWeight : 'bold',
			fontSize : 20
		}

	});

	var v2 = Ti.UI.createView({
		backgroundColor : 'white',
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		left : 0,
		top : 0,
	});

	var detail = Ti.UI.createLabel({
		text : "bla bla bla bla bla bla ",
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		left : 80,
		top : 0

	});

	v.add(im);
	v.add(title);
	v2.add(detail);
	row.add(v);
	row.add(v2);
	rows.push(row);
}

$.table1.data = rows;
