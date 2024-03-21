let arr1 = [3,7,34,90,12];

console.log( 'last item',arr1.slice[-1]);


let arr2 = [true,"green","where",12,56];
console.log('last item', arr2.slice[-1]);
console.log(arr2[arr2.length-1])


let pets =["Cow","Bird","Snake","Dog"];
let myPets = pets.join("");
console.log(myPets);

let arr3 =[-5,9,3,2,-3,6,8,4,1]
console.log((arr3).sort());

let arr5 = ["the", "way", "x", 4];

const searchWord = "food";
const result = arr5.includes(searchWord) ? searchWord : "the search word was not found";
console.log(result);


let arr = ["boy","man","girl",   "school","girl","woman"];
let arr4 = [...new Set(arr)];
let duplicateArr = arr.filter((item,index) => arr.indexOf(item) !==index);
console.log ("Array without duplicates:", arr4);
console.log("Array with duplicate:", duplicateArr);

let word = "renniw"
let newWord = word.split('').sort().join('');

console.log(newWord);



let arr6= ["the", "way",]
let fruits = ['Pineapple','Mango','Banana','Orange','Kiwi','Watermelon','Apple','Passion','Grapes','Guava'];
fruits.splice(5,0,"Tomato")
console.log({fruits});