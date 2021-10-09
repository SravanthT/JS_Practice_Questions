// How do you count the occurrence of a given character in a string?
console.clear()
let astr = 'this have to be repeated this so this can be tested by this function', occ= 0;
let word = 'this'
astr = astr.split(" ")
for (let i=0;i<astr.length;i++){
  if (astr[i] == word){
    occ++
  }
}
console.log(word + " occured " +occ + " times.")