// How do you find the missing number in a given integer array of 1 to 100?
//Considering increment as 1.
console.clear()
let arr = [1, 2, 4, 6, 3, 7, 8,10,20,21,22,26,24,23,25,29,36,39,50,60,70,90,100]

arr.sort(function(a,b){
  if (a > b){
    return 1
  }else{
    return -1
  }
})
console.log(arr)
// console.log(acd)
let x=[]
for (let i=0;i<arr.length-1;i++){
  let a =arr[i+1]-arr[i]
  if(a != 1){
    x.push(arr[i]+1)
    if(a > 2){
      increase(arr[i]+1 , a)
    
  }
}}

function increase(a,b){
  let c=(a+1)
  for (j=1; j<b-1; j++ ){
     
    x.push(c)
    c++
     
  }
}
console.log(x + " Are Missing numbers in array.")