import { html } from "../core.js";
import { connect } from "../store.js";
import TodoList from "./todoList.js";
const connector = connect();
function section({todoList}) {
    var isAllCompleted = todoList.every((item) => item.completed); 
    return html`
        <section class="main">
            <input id="toggle-all" 
                class="toggle-all" 
                type="checkbox"  
                onchange = "dispatch('toggleAll', this.checked)"
                ${isAllCompleted && 'checked'}
            />
            <label for="toggle-all"></label>
            ${TodoList()}
        </section>
    `;
}

export default connector(section);
