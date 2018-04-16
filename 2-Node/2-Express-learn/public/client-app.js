console.log('-client-app.js-');

let todosBtn = document.getElementById('todosBtn');
todosBtn.addEventListener('click', (e) => {
    fetch('my-todos', { method: 'GET' })
        .then(resp => resp.json())
        .then(todos => {
            document.getElementById('todos-box').innerText = JSON.stringify(todos);
        })
});

let todoForm = document.getElementById('todo-form');
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.getElementById('todo-title').value;
    let newTodo = { title };

    fetch('my-todos',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo),
        })
        .then(resp => resp.json())
        .then(message => {
            document.getElementById('todo-title').value = '';
            document.getElementById('todos-box').innerText = message.status;
        })

})