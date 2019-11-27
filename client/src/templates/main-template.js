export default function (db) {
    const list = db.reduce((prev, li, index) => {
        return `${prev}<li class="task">
                <a href="/tasks/${li.id}">
                    <span class="id">${li.id}</span>
                    <span class="description">${li.description}</span>
                </a>
            </li>`
    }, '')
    const template = `
    <ul class="tasks-list">${list}</ul>
    `
    return template;
};