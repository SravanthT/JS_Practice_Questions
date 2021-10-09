// How do you check if two strings are a rotation of each other?
console.clear()
let string1 = 'ZYXS',string2 = 'SZYX'
checkrotation(string1,string2)
function checkrotation(s1,s2){
    if (s1.length === s2.length && ((s1+s1).indexOf(s2)!=-1)){
        console.log("Yes they are rotational words")
    }else{
      console.log("No they are not Rotational words")
    }
}