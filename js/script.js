
var changeColor = function () {
	var currentClassName = document.getElementbyID('cool').className;
	
	if (currentClassName == 'cool') {
		document.getElementbyID('cool').className = 'cool red';
	} else {
		document.getElementbyID('cool').className = 'cool';
	}

}


