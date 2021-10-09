// How do you find duplicate numbers in an array if it contains multiple duplicates?

ar = [1,2,3,6,5,6,5,6,56,2,5,6,9]

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