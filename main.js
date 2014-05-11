var ectoplasm = 0;
var ghostStoreVal = false;

function ectoplasmClick(number) {
	ectoplasm = ectoplasm + number*10;
	document.getElementById('ectoplasm').innerHTML = "You have " + ectoplasm + " stuff";
}

function ectoplasmGenerator(num) {
	ectoplasm = ectoplasm + num;
	document.getElementById('ectoplasm').innerHTML = "You have " + ectoplasm + " stuff";
}

function ghostStore()  {
	if (ectoplasm > 99) {
		ghostStoreVal = true;
		document.getElementById('storeButton').style.display = "inline";
		return ghostStoreVal;
	}
	return ghostStoreVal;
}

function leaveStore() {
	store.style.display = "none";
	main.style.display = "inline";
}

window.onload = function() {

var storeButton = document.getElementById('storeButton');
var store = document.getElementById('store');
var main = document.getElementById('main');

storeButton.addEventListener('click', function() {
	store.style.display = "inline";
	main.style.display = "none";
})

}


window.setInterval(function() {

	ectoplasmGenerator(50);

	if (ghostStoreVal == false){
	ghostStore();
	}




}, 500);

