export default class MyFirstElement extends HTMLElement {

  connectedCallback() {
    console.info('My First Element connected!')
  }

  disconnectedCallback() {
    console.info('My First Element disconnected!')
  }

}
