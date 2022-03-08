import html from '../core.js'

function Footer() {
    return html `
            <Footer class="footer">
                <span class="todo-count"><strong>0</strong> item left</span>
                <ul class="filters">
                    <li>
                        <a class="selected" href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button class="clear-completed">Clear completed</button>
            </Footer>
    `
}

export default Footer
