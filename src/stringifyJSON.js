// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if(typeof obj === 'object') {
    if(Array.isArray(obj)) { //array
      if(obj.length === 0) {
        return "[]";
      }
      else {
        var new_array = [];
        for(var i = 0; i < obj.length; i++) {
          new_array.push(stringifyJSON(obj[i]));
        }

        return '[' + new_array + ']'; //when converting to string, brackets are removed
      }
    }
    else {
      if(obj === null) { //null
        return 'null';
      }
      else { //object
        var result = [];
        var temp = '';

        for(var key in obj) {
          if(stringifyJSON(obj[key])) {
            result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
          }
        }

        if(result.length === 0) {
          temp = '{}';
        }
        else {
          temp = '{' + result.join(',') + '}';
        }

        return temp;
      }
    }
  }
  else{ //number, string, boolean
    if(typeof obj === 'string') {
      var temp = '';
      temp += '\"' + obj + '\"';
      return temp;
    }
    else if(typeof obj === 'number') {
      return '' + obj;
    }
    else if(typeof obj === 'boolean') {
      return String(obj);
    }
  }
};
