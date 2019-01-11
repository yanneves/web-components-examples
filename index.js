import MyFirstElement from './components/my-first-element/index.js'
import ExpandableBox from './components/expandable-box/index.js'

window.customElements.define('my-first-element', MyFirstElement)
window.customElements.define('expandable-box', ExpandableBox)

document.body.appendChild(document.createElement('my-first-element'))
document.querySelector('my-first-element').remove()
