console.log('-client-app.js-');

let todosBtn = document.getElementById('todosBtn');
todosBtn.addEventListener('click',(e)=>{
    fetch('todos')
    .then(resp=>resp.json())
    .then(todos=>{
        document.getElementById('todos-box').innerText=JSON.stringify(todos);
    })
});