let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

const addDelete = (arr) => {
 arr.shift();
 arr.push('geothermal');
}

addDelete(energy);
console.log(energy);