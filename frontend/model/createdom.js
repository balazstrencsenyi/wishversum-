import {createEl} from '../utils/utils.js';

export function createHeader () {

const headerContainer = createEl("div")
headerContainer.classList.add("header-container")

const h1 = createEl("h1")
h1.innerText = "Wishversum"

const menuContainer = createEl("div");
menuContainer.classList.add("menu-container")
const home = createEl("div")
home.classList.add("menu-item")
home.innerText = "Home"
const about = createEl("div")
about.classList.add("menu-item")
about.innerText = "About us"
const wish = createEl("div")
wish.classList.add("menu-item")
wish.innerText = "Make a wish"
const faq = createEl("div")
faq.classList.add("menu-item")
faq.innerText = "FAQ"
const contact = createEl("div")
contact.classList.add("menu-item")
contact.innerText = "Contact us"


menuContainer.append(home, about, wish, faq, contact)
headerContainer.append(h1, menuContainer)
return headerContainer
}