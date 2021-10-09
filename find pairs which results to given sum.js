// How do you find all pairs of an integer array whose sum is equal to a given number?
console.clear()
let brr = [1,5,7,-1,6,5];
let s=[]
let sum = 6;
for (let i=0;i<brr.length;i++){
  let x = brr[i]
  for ( let j=(i+1);j<brr.length;j++){
    let y = brr[j]
    if ((brr[i]  +brr[j]) == sum){
      s.push({x, y})
      console.log(x,y + " are pairs to sum")
    }
  }
}
console.log(s)