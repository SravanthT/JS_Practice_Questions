// How do you check if a string contains only digits?
// How do you check if a string contains only digits?

let str = '987456982'
let ztr = '587a512569845'
isNumb(ztr)
function isNumb(str){
  let z = ztr.match(/^[0-9]+$/) != null
  if (z == false){
  return (str+' also contains characters other than digits')}else {
    return (str + ' contains Only digits')
  }
}
 console.log(isNaN(ztr))