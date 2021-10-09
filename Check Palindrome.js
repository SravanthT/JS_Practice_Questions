// How do you check if a given string is a palindrome?
checkPalindrome("madam")
function checkPalindrome(strng){
if(strng == strng.split("").reverse().join("")){
  console.log("yes")
}
}