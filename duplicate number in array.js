// How do you find the duplicate number on a given integer array?
let ar = []
let solved = ''
for (i=0;i<ar.length;i++){
  if (solved.includes(ar[i]) == false){
  let s=0
  for (j=0;j<ar.length;j++){
    if (ar[i]==ar[j]){
      s++
    }
  }
    if(s>1){
    console.log(ar[i]+" has repeted "+(s) + ' times.')}
  solved += ar[i]
}}