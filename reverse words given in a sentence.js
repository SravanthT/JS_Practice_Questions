// "How do you reverse words in a given sentence without using any in-built method?"

console.clear()
let extra = '', str =" How do you reverse words in a given sentence without using any in-built method?"
console.log(str)
revWords(str)
function revWords(sentence){
  let next = str.length;
  for (i=str.length;i>=0;i--){
    if(str[i] == " "){
      extra += str.substring(i,next)
      next = i
    }
    
  }
  extra = extra.trim();
  return extra
}

console.log(extra)