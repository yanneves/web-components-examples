export default class ExpandableBox extends HTMLElement {

  constructor() {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(this.styles)
  }

  static get observedAttributes() {
    return ['expanded']
  }

  get styles() {
    const style = document.createElement('style')

    style.textContent = `
      slot {
        display: block;
        padding: 15px;
        background-color: lightgrey;
      }
    `.trim()

    return style
  }

  get expanded() {
    return this.hasAttribute('expanded')
  }

  set expanded(val) {
    val
      ? this.setAttribute('expanded', '')
      : this.removeAttribute('expanded')
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.info(`Expandable box ${name} changed from ${oldValue} to ${newValue}`)
    if (name === 'expanded') this.onChange(oldValue, newValue)
  }

  onChange(oldValue, newValue) {
    if (oldValue == null && newValue != null) {
      this.shadow.appendChild(document.createElement('slot'))
    } else {
      const slots = this.shadow.querySelectorAll('slot')
      Array.from(slots).forEach(slot => slot.remove())
    }
  }

}
