import { html } from "../core.js";
import { connect } from "../store.js";
const connector = connect();
function todoItem(item, index) {
    return html`
        <li class="${item.completed && 'completed'} ${item.editing && 'editing'}">
            <div class="view">
                <input 
                    oninput = "dispatch('toggle', this.checked, ${index})" 
                    class="toggle" type="checkbox" 
                    ${item.completed && 'checked'}  
                    
                />
                <label ondblclick = "dispatch('editing', ${index})">  ${item.title}  </label>
                <button onclick="dispatch('destroy', ${index})" class="destroy"></button>
            </div>
            <input 
                class="edit" 
                value="${item.title}"
                onkeyup = "event.keyCode === 13 && dispatch('endEditing', this.value.trim(), ${index}) || event.keyCode === 27 && dispatch('endEditing', undefined, ${index})"
                onblur = "dispatch('endEditing', '', ${index})"
            />
        </li>
    `;
}

export default todoItem;
