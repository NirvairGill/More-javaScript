/*
const isBlank = (str) => {
  return str.length === 0
}
*/
function isBlank(str) {
  return !str;
}



console.log(isBlank('mars')); // false
console.log(isBlank('  ') )  // false
console.log(isBlank('')  )  // true



