import { getDataFromServer } from "./js-modules/get-data";
import { createSamples } from "./js-modules/samples";

document.addEventListener('DOMContentLoaded', () => {
    const regexp = document.querySelector('#regexp');
    getDataFromServer('/db.json', (db) => {
        regexp.value = db.regexp;
        createSamples(db.samples);
    })
    // const listener = (event) => {
    //     console.log(event.target.value)
    // }
    // regexp.addEventListener('input', listener)

    // document.querySelector('.samples').oninput = event => {
    //     console.log(event.target.value)
    // }
})
