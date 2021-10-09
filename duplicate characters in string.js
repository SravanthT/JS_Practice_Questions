// How do you print duplicate characters from a string?
let ar ="123655897455546211336655478910232452"
console.log(ar)
ar = ar.split('')

let solved = ''
let dup = []
for (i=0;i<ar.length;i++){
  if (solved.includes(ar[i]) == false){
  let s=0
  for (j=0;j<ar.length;j++){
    if (ar[i]==ar[j]){
      s++
    }
  }
    if(s>1){
      dup.push(ar[i])
    }
  solved += ar[i]
    
}}
console.log(dup + ' are duplicacte')