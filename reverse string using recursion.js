// how can a given string be reversed using recursion in javascript

function Reverse(str) {
    if (str === null) {
      return null;
    }
    if (str.length <= 1) {
      return str;
    }
    var first = str[0];
    var last = str[str.length - 1];
    var str1 = Reverse(str.substring(1, str.length - 1));
    return last + str1 + first;
  }
  
  var result = Reverse("Trying to reverse this string");
  console.log(result)