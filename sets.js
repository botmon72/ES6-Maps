//SETS - store unique values of any type

const set1 = new Set();

//Add values to set
set1.add(100);
set1.add(`A String`);
set1.add({name: 'John'});
set1.add(true);
set1.add(function(){});

// const set2 = new Set([1, true, 'string', {name: 'Jill'}]);


//get count
console.log(set1.size);

// //check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));


//delete from set
set1.delete(100);


//ITERATE THROUGH THE SETS
//for-of loop
for(let item of set1){
  console.log(item)
}

//forEach loop
set1.forEach((item) => {
  console.log(item);
})

//CONVERT SET TO ARRAY
const setArr = Array.from(set1);

console.log(setArr);