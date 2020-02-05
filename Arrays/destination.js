let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

const contains = (checkCity, destinationArr) => {
  for (let i = 0; i < destinationArr.length; i += 1) {
     if (checkCity === destinationArr[i]) {
       return true;
    }
    
  } return false;
}



contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false