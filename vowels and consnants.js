
// How do you count a number of vowels and consonants in a given string?
let strings = 'this is a string to test number of vowels and consonants'
let v = 0, c = 0, sp=0
for (i=0;i<strings.length;i++){
    if(strings[i] == " "){
      sp++
        continue;
    }else if(strings[i].match(/[a e i o u]/g)){
            v++
    } else {
        c++
    }
}
console.log(v+" Vowels & "+ c +" Consonants are in the string")
