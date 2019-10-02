var someVar = 10;
let letVar = 20;
document.addEventListener('DOMContentLoaded', () => {
    let regexp = document.querySelector('#regexp');
    // console.log(document.querySelector('.sample:nth-child(2) input'))
    const listener = (event) => {
        console.log(event.target.value)
    }
    regexp.addEventListener('input', listener)
    // regexp.removeEventListener('input', listener)

    document.querySelector('.samples').oninput = event => {
        console.log(event.target.value)
    }
})
