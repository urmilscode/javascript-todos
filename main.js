const form = document.querySelector('.fetch-todos');

const list = document.querySelector('.list');

form.addEventListener('submit', e => {
    e.preventDefault();
    const todos = form.add.value.trim();
    console.log(todos);
    if(todos.length) {
        generateTemplate(todos);
        //form.reset();
    }
})

const generateTemplate = todos => {
    const html = `<li> ${todos} </li>`
    list.innerHTML += html;
}