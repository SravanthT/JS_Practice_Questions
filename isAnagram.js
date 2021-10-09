// How do you check if two strings are anagrams of each other?
console.clear();
isAnnagram("india" , "niida");
function isAnnagram(s1,s2){
  let x = s1.split('').sort().join("")
  let y = s2.split('').sort().join("")
  if( x === y ) { console.log("Yes They are Anagrams")}
  else{
    console.log("No They are not Anagrams")
  }
}