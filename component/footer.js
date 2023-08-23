import { html } from "../core.js";
import { connect } from "../store.js";
const connector = connect();
function footer({ todoList, currentFilter, filters }) {
    var itemLeft = todoList.filter(filters.active).length;
    return html`
        <footer class="footer">
            <span class="todo-count"
                ><strong> ${itemLeft} </strong> item left</span
            >
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
                ${Object.keys(filters).map(
                    (type) =>
                        html`<li>
                            <a class="${currentFilter===type && 'selected'}" href="#"
                            onclick = "dispatch('switchFilter', '${type}')"  
                            > ${type[0].toUpperCase() + type.slice(1)} </a>
                        </li>`
                )}
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            ${itemLeft !== todoList.length &&
                html`<button
                    class="clear-completed"
                    onclick="dispatch('clearCompleted')"
                >
                Clear completed
                </button>`}
        </footer>
    `;
}

export default connector(footer);
