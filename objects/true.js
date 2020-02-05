let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
}

for (prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}

// Javascript takes only strings as keys. So, if it not a string, javascript coerces it as a string. In our code, true key is actually 
// coerced into a string. We are comparing with strict equality operator. So, if statement will never evaluate till we pass 'true' as string instead of boolean.