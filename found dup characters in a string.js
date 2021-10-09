// How do you print duplicate characters from a string?
console.clear()
let string = 'a string to check for repetitive characters'

strting = string.split(' ').join("").split("")

console.log(duplicate(string))

function duplicate(str){
    let solved = ''
let dup = []
for(i=0;i<str.length;i++){
  if (solved.includes(str[i]) == false){
    solved += str[i]
  }else {
    dup.push(str[i])
  }
}
return (dup)
}
