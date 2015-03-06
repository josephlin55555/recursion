// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	//console.log(document.body.childNodes[3].classList[0]);
	var array = [];

	function exploration(node) {

		if(node.classList) { //checks if classList is correct
			for(var i = 0; i < node.classList.length; i++) {
				if(node.classList[i] === className) {
					array.push(node);
				}
			}
		}

		for(var i = 0; i < node.childNodes.length; i++) {
			exploration(node.childNodes[i]);
		}

	}

	exploration(document.body);
	return array;
};
