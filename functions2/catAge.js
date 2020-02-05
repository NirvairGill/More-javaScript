const catAge = (humanAge) => {
 const catAgeArray = [15, 9];
 if (humanAge === 1) {
   return 15;
 }
 while (humanAge > 2) {
   catAgeArray.push(4);
   humanAge -= 1; 
  }
 const catAgeSum = catAgeArray.reduce((accumulator, currentValue) => {
   return accumulator + currentValue;
 });
return catAgeSum;

}

console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(10)); // 32