/*
let repeat = (numOfRep, str) => {
let strArray = [];
for (let i = 0; i < numOfRep; i += 1){
   strArray.push(str);
}

console.log(strArray.join(''));
}





repeat(3, 'ha');
*/

let repeat = (numOfRep, str) => {
  let finalStr = '';
while (numOfRep > 0){
  finalStr += str;
  numOfRep -= 1;
}
console.log(finalStr);
}

repeat(5, 'ha');