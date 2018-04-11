//-----------------------------------------------------
// {id:1,title:'',completed:false}
//-----------------------------------------------------
// Model
class Todo {
    constructor(title) {
        this.id = 0;
        this.title = title;
        this.completed = false;
    }
}
//-----------------------------------------------------
// Service
class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        //
    }
    completeTodo(id) {
        //
    }
    editTodo(id, newTitle) {
        //
    }
    deleteTodo(id) {

    }
    completeAll() {

    }
    clearCompleted() {

    }
    view(status) {
        // status ==> 'ALL' | 'ACTIVE' | 'COMPLETED'
    }

}
//-----------------------------------------------------

const service = new TodoService();