import {html} from '../core.js'
import {connect} from '../store.js'; 
const connector = connect(); 
function header() { 
    return html`
    <header class="header">
		<h1>Just do it!</h1>
		<input 
            onkeyup = 'event.keyCode === 13 && dispatch("add", this.value.trim())' 
            class="new-todo" 
            placeholder="Type what you want to do" 
        autofocus>
	</header>
    `; 
}

export default connector(header); 



//this.keycode === 13 && dispatch('add',this.value)

// 27 esc
