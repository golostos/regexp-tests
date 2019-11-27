import 'whatwg-fetch';

import { getDataFromServer } from "./js-modules/get-data";
import { createSamples } from "./js-modules/samples";

document.addEventListener('DOMContentLoaded', () => {
    const regexp = document.querySelector('#regexp');
    const description = document.querySelector('#description');
    console.log(window.location.pathname);
    const taskId = /\/tasks\/(\d+)/.exec(window.location.pathname)[1] || 0;
    getDataFromServer('/api/tasks/' + taskId, (db) => {
        regexp.value = db.regexp;
        description.value = db.description;
        createSamples(db.samples);
    })
})
