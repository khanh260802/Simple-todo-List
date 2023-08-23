import storage from "./util/storage.js"


const init = {
    todoList : storage.get(),
    currentFilter: 'all', 
    filters : { 
        all : () => true, 
        active: (item) => !item.completed, 
        completed: (item) => item.completed, 
    }
}
const actions = { 
    add(State, title) { 
        if(title)
            State.todoList = [...State.todoList, {title, completed: false}] 
    },
    toggle({todoList}, isCompleted, index) { 
        todoList[index]['completed'] = isCompleted; 
    }, 
    destroy({todoList}, index) { 
        todoList.splice(index, 1); 
    },
    toggleAll({todoList}, isCompleted) { 
        todoList.forEach(todo => todo.completed = isCompleted);
    },
    editing({todoList}, index) { 
        todoList.forEach((item) => item.editing=false);  
        todoList[index].editing = true; 
    }, 
    endEditing({todoList}, value, index) {
        todoList[index].editing = false; 
        if(value==='') {
            console.log(value); 
            todoList.splice(index, 1);
        }
        else if(value!==undefined)
            todoList[index].title = value; 
    }, 
    clearCompleted({todoList}) { 
        todoList.forEach((item) => item.completed = false); 
    },
    switchFilter(state, type) { 
        state.currentFilter = type; 
    }
}

export default function reducer(state = init, action, args) { 
    actions[action] && actions[action](state, ...args); 
    storage.set(state.todoList); 
    return state; 
}
