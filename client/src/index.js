import 'whatwg-fetch';

import { getDataFromServer } from "./js-modules/get-data";
import { createSamples } from "./js-modules/samples";
// import './js-modules/test';

document.addEventListener('DOMContentLoaded', () => {
    const regexp = document.querySelector('#regexp');
    getDataFromServer('/api/tasks?id=2', (db) => {
        regexp.value = db.regexp;
        createSamples(db.samples);
    })
})
