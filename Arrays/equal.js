let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
// => false. In javaScript, Arrays are equal if both variables pionting to the same memory location.
// On the other hand, if two arrays have same values and even same number of elements, and not pointing to the exact same memory, then they return false.