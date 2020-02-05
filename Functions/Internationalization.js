const greet = lanCode => {
  switch(lanCode) {
    case 'fr':
    case 'fg':
      return 'Salut!';
    case 'pt':
      return 'Olá!';
    case 'de':
      return 'Hallo!';
    case 'sv':
     return 'Hej!';
    case 'af':
      return 'Haai!';
    default:
     return 'Hi!';
    }
}

console.log(greet('en')) // 'Hi!'
console.log(greet('fg')) // 'Salut!'
console.log(greet('pt')) // 'Olá!'
console.log(greet('de')) // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'