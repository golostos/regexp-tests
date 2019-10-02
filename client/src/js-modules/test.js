// let description = document.querySelector('#description');
// regexp = document.getElementById('regexp');
// console.log(regexp);
// console.log(window.regexp);
// console.log(window.someVar)
// console.log(someVar)
// console.log(letVar)
// console.log(window.letVar)




// console.log("Hello")

// $(function () {
//     let description = $('#description');
// })

// window.onload = function() {
//     let description = document.querySelector('#description');
//     console.log(description.value);
// }








// function nameOfFunc(arg1, arg2) {

// }

// let func2 = function (arg1, arg2, arg3) {

// }

// let func3 = (arg1, arg2, arg3) => {

// }

// function Animal(name, sound) {
//     this.name = name;
//     this.sound = sound;
//     this.getSound = function () {
//         console.log(this.sound)
//     }
// }

// Animal.prototype.protoGetSound = function () {
//     console.log(this.sound);
//     console.log(this);

// }

// Animal.prototype.someMethod = () => {
//     console.log(this.sound);
//     console.log(this);
// }

// Animal.staticGetSound = function (sound) {
//     console.log(sound);
// }

// function bind(func, context) {
//     return function(...arg) {
//         func.call(context, ...arg)
//     }
// }

// let dog = new Animal('Rex', 'Bark');
// // console.log(dog.name);
// // dog.getSound();
// let getSound = dog.protoGetSound;
// // getSound.apply(dog);
// // let newGetSound = getSound.bind(dog);
// let newGetSound = bind(getSound, dog);

// newGetSound();
// dog.someMethod();
// Animal.staticGetSound('Meow');


// class Animal2 {
//     sername = 'Some name'
//     constructor(name, sound) {
//         this.name = name;
//         this.sound = sound;
//     }
//     getSound() {
//         console.log(this.sound);
//     }
//     set setSound(sound) {
//         this.sound = sound;
//     }
//     static staticGetSound(sound) {
//         console.log(sound);
//     }
// }

// let cat = new Animal2('Tom', 'Meow');
// cat.getSound();
// cat.setSound = 'Bark'
// cat.getSound();

// class NewComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {name: 'React'}
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick = (event) => {
//         console.log(this.state)
//         this.setState({name: 'Denis'})
//     }
//     render() {
//         return <>
//             <h1>{this.state.name} component</h1>
//             <button onClick={this.handleClick}>Click</button>
//         </>
//     }
// }
