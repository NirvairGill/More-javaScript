function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

const greet = () => {
  return (`${greeting()}, ${recipient()}!`);
}

console.log(greet());