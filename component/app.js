import { html } from "../core.js";
import { connect } from "../store.js";
const connector = connect();
import header from "./header.js";
import section from "./section.js";
import footer from "./footer.js";
function App() {
    return html`
        <section class="todoapp">
        ${header()} 
        ${section()} 
        ${footer()}
        </section>
    `;
}

export default connector(App);
