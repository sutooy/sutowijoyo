function anagram (x, y) {
if (x.length !== y.length) {return false;} 

// let newX = [];
const result = {};
console.log(result)
for (let i=0; i<x.length;i++) {
    // newX.push x[i];
    let character = x[i];
    result[character] = result[character] ? result[character] +=1 : result[character] = 1;
}

for (let i = 0; i<y.length; i++){
    let character = y[i];
    if (!result[character]) {return false;
        console.log(result)
    }
    else {result[character]=-1;
    }
}
return true;
}

console.log (anagram('aku', 'uka'))
console.log (anagram('aku', 'kaki'))
console.log (anagram('aku', 'aak'))