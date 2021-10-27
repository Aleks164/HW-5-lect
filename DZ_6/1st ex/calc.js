let diff = function(a, b) {
	let result;
	if(a<b){
		result = b-a;
		return result;
	}
	else {
		result = a-b;
		return result;
	}
  } 

 module.exports = diff;