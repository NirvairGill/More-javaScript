const str = 'launch school tech & talk';

let capitalStr = str.split(' ').map(str1 => {
  return (str1[0].toUpperCase() + str1.slice(1))});
  console.log(capitalStr.join(' '));