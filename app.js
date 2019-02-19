//MAPS = key-value pairs - can use ANY type as a keyor value

const map1 = new Map();

//Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function getKey(){};

//set Map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

//Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

//Count values
console.log(`Size: ${map1.size}`);

//Iterating through the maps
//loop using for-of iteration to get keys and values
for(let [key, value] of map1){
  console.log(`${key} = ${value}`);
}

//Iterate keys only
for(let key of map1.keys()){
  console.log(`${key}`);
}

//Iterate values only
for(let value of map1.values()){
  console.log(value);
}

//Loop using ForEach method
map1.forEach(function(key, value){
  console.log(`${key} = ${value}`);
})

//CONVERT TO ARRAYS
//create an array of key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

//create an array of just values
const valArr = Array.from(map1.values());
console.log(valArr);

//array of just keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);