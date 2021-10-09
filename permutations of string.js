// How do you find all permutations of a string?

let sstr = 'Lets',count = 0
let permutation = (sstr,result) => {
    if (sstr.length == 0){
            return result;

    }
    for (let i=0;i<sstr.length;i++){
        let rest = sstr.substring(0,i)+sstr.substring(i+1)
        count++
        permutation(rest,result + sstr[i])
    }
}
permutation(sstr, '')
console.log(count)
