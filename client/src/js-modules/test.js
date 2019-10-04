const arr = [1, 2, 3, 4, 5]
let sum = 0;
arr.forEach(element => {
    sum += element;
});

const sum2 = arr.reduce((sum, el) => sum + el, 0);
// console.log(sum)

// setTimeout(() => {
//     console.log('Time over');
//     setTimeout(() => {
//         console.log('Time over2');
//         setTimeout(() => {
//             console.log('Time over3');
//             setTimeout(() => {
//                 console.log('Time over4');
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Step 1');
//         // resolve()
//     }, 1000)
// })

// promise.then(res => {
//     console.log('Step 2')
// }).then(res => {
//     console.log('Step 3')
// })

function delay(ms) {
    return new Promise((resolve, reject) => {
        if (ms > 4000) reject('It\'s too long')
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

// delay(1000).then(() => {
//     console.log('Step 1');
//     return delay(2000)
// }).then(() => {
//     console.log('Step 2');
//     return delay(5000)
// }).then(() => {
//     console.log('Step 3');
//     return 'Stop'
// }).then((result) => {
//     console.log(result);
// }).catch(error => {
//     console.error(error);
// }).then(() => {
//     console.log('Step 3');
//     return 'Stop'
// })


async function arrayLoop() {
    const array = [1,2,3,4,5,6];
    for (const el of array) {
        console.log(el)
        await delay(1000)
    }
    throw new Error('Some error')
    // try {
    // } catch (error) {
    //     console.error(error)
    // }
}

arrayLoop().catch(console.error);

// const array = [1,2,3,4,5,6];

// array.reduce((promise, el) => {
//     return promise.then(() => {
//         console.log(el)
//         return delay(1000)
//     });
// }, Promise.resolve())



// console.log(sum2)



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
