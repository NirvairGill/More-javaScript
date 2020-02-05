let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];
/*
vocabulary.forEach(subArray => {
  subArray.forEach(word => console.log(word))
});
*/
const iterate = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1){
          console.log(arr[i][j]);
    }
  }
}
iterate(vocabulary);