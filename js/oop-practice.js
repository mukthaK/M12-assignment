// STEP 1
// Named
function Cat() {

}
// Anonymous
const Dog = function () {

}

// STEP 2
// function Cat() {

// }
// const Dog = function () {

// }
// const cat1 = new Cat();
// const dog1 = new Dog(); 

// STEP 3
// const Animal = function () {
//     console.log('The Animal has been created');
// }
// const cat = new Animal();

// STEP 4
// const Animal = function (sound) {
//         console.log(sound);
//     }
// const cat = new Animal('The Animal has been created');

// STEP 5
// const Animal = function (type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
// }
// const cat = new Animal('Cat', 'Bengal', 'Light brown', 8, 14);

// STEP 6
// const Animal = function (type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
// }
// const cat = new Animal('Cat', 'Bengal', 'Light brown', 8, 14);
// for (let i in cat){
//     console.log(`${i} : ${cat[i]}`);
// }

// STEP 7
// const Animal = function (type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
//     this.speak = function() {
//         if (this.type.toLowerCase() === 'dog') {
//             console.log(`The ${this.color} dog is barking!`);
//         }  else if (this.type.toLowerCase() === 'cat') {
//             console.log(`The ${this.color} cat is meowing!`);
//         }
//     }
// }
// const cat = new Animal('Cat', 'Bengal', 'Light brown', 8, 14);
// const dog = new Animal('Dog', 'Great Dane', 'Black', 30, 43);
// cat.speak();
// dog.speak();

// STEP 8
// const Animal = function (_type, _breed, _color, _height, _length) {
//     let type = _type;
//     let breed = _breed;
//     let color = _color;
//     let height = _height;
//     let length = _length;
//     let checkType = function () {
//         if (type.toLowerCase() === 'dog') {
//             return 'dog';
//         }  else {
//             return 'cat';
//         }
//     };
//     this.speak = function() {
//         return checkType();
//     }
// }
// const cat = new Animal('Cat', 'Bengal', 'Light brown', 8, 14);
// const dog = new Animal('Dog', 'Great Dane', 'Black', 30, 43);
// console.log(`The ${cat.speak()} has made a noise!`);
// console.log(`The ${dog.speak()} has made a noise!`);

// STEP 9
// String.prototype.findWords = function (word) {
//     let arr = this.split(' ');
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i].toLowerCase() === word.toLowerCase()){
//             count+= 1;
//         }
//     }
//     return count;
// }
// let para = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
// console.log(para.findWords('Lorem'));