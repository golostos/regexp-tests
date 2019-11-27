import 'whatwg-fetch';

import { getDataFromServer } from "./js-modules/get-data";
import { createSamples } from "./js-modules/samples";
import mainTemplate from './templates/main-template'
import taskTemplate from './templates/task-template'

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container')
    if (window.location.pathname === '/') {
        getDataFromServer('/api/alltasks', (db) => {
            console.log(db)
            container.innerHTML = mainTemplate(db);
        });
    } else {
        container.innerHTML = taskTemplate;
        const loc = /\/tasks\/(\d+)/.exec(window.location.pathname);
        const taskId = loc ? loc[1] : 0;
        const regexp = document.querySelector('#regexp');
        const description = document.querySelector('#description');
        getDataFromServer('/api/tasks/' + taskId, (db) => {
            if (db.error) {
                alert(db.error)
            } else {
                regexp.value = db.regexp;
                description.value = db.description;
                createSamples(db.samples);
            }
        })
    }
})
