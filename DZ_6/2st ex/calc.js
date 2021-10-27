let isWord = function(string) {
    if ((typeof string)=="string"){
    let checkString = string.split(" ");
    if(checkString.length==1){
        return true;
    }
    else return false;
    }
    else return false;
  }
 

 module.exports = isWord;