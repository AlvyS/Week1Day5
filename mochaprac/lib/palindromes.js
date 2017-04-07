function isPalindrome(s) {
  var stringSplit = s.split(" ").join("");
  var stringReverse = stringSplit.split("").reverse().join("");
  return stringSplit === stringReverse; //same as "if stringSplit = stringReverse => return true"
}

module.exports = isPalindrome;
