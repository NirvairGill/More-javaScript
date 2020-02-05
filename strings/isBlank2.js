const isBlank  = (str) => {
  console.log(str.length === 0 || str.includes(' '))
}




isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true