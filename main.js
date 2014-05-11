var ectoplasm = 0;

function ectoplasmClick(number) {
	ectoplasm = ectoplasm + number;
	document.getElementById('ectoplasm').innerHTML = ectoplasm;
}

function ectoplasmGenerator(num) {
	ectoplasm = ectoplasm + num;
	document.getElementById('ectoplasm').innerHTML = ectoplasm;

}

window.setInterval(function() {

	ectoplasmGenerator(5);

}, 1000);