import { html } from "../core.js";
import { connect } from "../store.js";
import todoItem from "./todoItem.js";
const connector = connect();
function todoList({todoList, filters, currentFilter}) {
    return html`
        <ul class="todo-list">
            ${todoList.filter(filters[currentFilter]).map((data, index) => todoItem(data, index))} 
        </ul>
    `;
}
export default connector(todoList);
