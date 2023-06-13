import { createEl } from '../utils/utils.js';
import { post } from "../utils/utils.js";

export function saveData() {
  const root = document.querySelector("#root");

  root.addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const name = document.querySelector("#last-name").value;
    const newData = {};

    const formElements = Array.from(form.elements);
    for (let element of formElements) {
      if (
        element.name &&
        (element.name === "firstInput" ||
          element.name === "lastInput" ||
          element.name === "emailInput" ||
          element.name === "wishInput" ||
          element.name === "selectInput")
      ) {
        newData[element.name] = element.value;
      }
    }

    await post(`/orders/${name}`, newData);
    form.reset();
  });
}

export function createHeader() {
  const headerContainer = createEl("div");
  headerContainer.classList.add("header-container");

  const h1 = createEl("h1");
  h1.innerText = "Wishversum";

  const menuContainer = createEl("div");
  menuContainer.classList.add("menu-container");
  const home = createEl("div");
  home.classList.add("menu-item");
  home.innerText = "Home";
  const about = createEl("div");
  about.classList.add("menu-item");
  about.innerText = "About us";
  const wish = createEl("div");
  wish.classList.add("menu-item");
  wish.innerText = "Make a wish";
  const faq = createEl("div");
  faq.classList.add("menu-item");
  faq.innerText = "FAQ";
  const contact = createEl("div");
  contact.classList.add("menu-item");
  contact.innerText = "Contact us";

  menuContainer.append(home, about, wish, faq, contact);
  headerContainer.append(h1, menuContainer);
  return headerContainer;
}

export function createLandingPage() {
  const middleContainer = createEl("div");
  middleContainer.classList.add("middle-container");

  const firstPage = createEl("div");
  firstPage.classList.add("first-page");

  const card = createEl("div");
  card.classList.add("card");

  const text = createEl("div");
  text.classList.add("text");
  text.innerText =
    "Welcome to Wishversum!";
  const text2 = createEl("div");
  text2.classList.add("text2");
  text2.innerText = "Click on the button below and make a wish!";

  const arrow = createEl("div");
  arrow.classList.add("arrow");
  arrow.innerText = "⬇Make your dream come true⬇";

  const button = createEl("button");
  button.classList.add("button");
  button.innerText = "Make a wish";

  button.addEventListener("click", () => {
    middleContainer.innerHTML = "";
    middleContainer.append(createWishForm());
    saveData(); 
  });
  
  firstPage.append(card);
  card.append(text, text2, arrow, button);
  middleContainer.append(firstPage);

  //create second page for landing page with about us
  const secondPage = createEl("div");
  secondPage.classList.add("second-page");

  const textContainer = createEl("div");
  textContainer.classList.add("text-container");

  const secondText = createEl("div");
  secondText.classList.add("second-text");
  secondText.innerText = "Welcome to Wishversum, where dreams come true. We grant wishes for money, wealth, health, family, love, peace, grades, studies, fun, and more. Our mission is to bring hope and joy to individuals, making a positive impact on their lives. Submit your wish, and our dedicated team will work tirelessly to fulfill it. Join our community and let's make dreams possible together!";

  const imageContainer = createEl("div");
  imageContainer.classList.add("image-container");

  const image = createEl("img");
  image.classList.add("pray-image");
  image.setAttribute("src", "media/pray.png");

  imageContainer.append(image);
  textContainer.append(secondText);
  secondPage.append(textContainer, imageContainer);

  middleContainer.append(secondPage);

  //create third page for landing page with Make a wish

  const thirdPage = createEl("div");
  thirdPage.classList.add("third-page");

  const wishForm = createEl("form");
  wishForm.classList.add("wish-form");

  const firstInput = createEl("input");
  firstInput.classList.add("input");
  firstInput.setAttribute("type", "text");
  firstInput.setAttribute("placeholder", "First Name");
  firstInput.setAttribute("name", "firstInput"); // Add name attribute

  const lastInput = createEl("input");
  lastInput.classList.add("input");
  lastInput.id = "last-name";
  lastInput.setAttribute("type", "text");
  lastInput.setAttribute("placeholder", "Last Name");
  lastInput.setAttribute("name", "lastInput"); // Add name attribute

  const emailInput = createEl("input");
  emailInput.classList.add("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("placeholder", "Email");
  emailInput.setAttribute("name", "emailInput"); // Add name attribute

  const wishInput = createEl("input");
  wishInput.classList.add("input");
  wishInput.setAttribute("type", "text");
  wishInput.setAttribute("placeholder", "Your wish");
  wishInput.setAttribute("name", "wishInput"); // Add name attribute

  const selectInput = createEl("select");
  selectInput.setAttribute("name", "selectInput"); // Add name attribute

  const option1 = createEl("option");
  option1.setAttribute("value", "money");
  option1.innerText = "Money";

  const option2 = createEl("option");
  option2.setAttribute("value", "love");
  option2.innerText = "Love";

  const option3 = createEl("option");
  option3.setAttribute("value", "health");
  option3.innerText = "Health";

  const option4 = createEl("option");
  option4.setAttribute("value", "Wealth");
  option4.innerText = "Wealth";

  const option5 = createEl("option");
  option5.setAttribute("value", "Family");
  option5.innerText = "Family";

  const option6 = createEl("option");
  option6.setAttribute("value", "Career");
  option6.innerText = "Career";

  const option7 = createEl("option");
  option7.setAttribute("value", "Better grades");
  option7.innerText = "Better grades";

  const option8 = createEl("option");
  option8.setAttribute("value", "Happiness");
  option8.innerText = "Happiness";

  const option9 = createEl("option");
  option9.setAttribute("value", "Peace");
  option9.innerText = "Peace";

  const submitButton = createEl("button");
  submitButton.classList.add("submit-button");
  submitButton.setAttribute("type", "submit");
  submitButton.innerText = "Wish";

  selectInput.append(option1, option2, option3, option4, option5, option6, option7, option8, option9);
  wishForm.append(firstInput, lastInput, emailInput, wishInput, selectInput, submitButton);
  thirdPage.append(wishForm);
  middleContainer.append(thirdPage);


  return middleContainer;

}

/*export function createWishForm() {
  const wishForm = createEl("form");
  wishForm.classList.add("wish-form");

  const firstInput = createEl("input");
  firstInput.classList.add("input");
  firstInput.setAttribute("type", "text");
  firstInput.setAttribute("placeholder", "First Name");
  firstInput.setAttribute("name", "firstInput"); // Add name attribute

  const lastInput = createEl("input");
  lastInput.classList.add("input");
  lastInput.id = "last-name";
  lastInput.setAttribute("type", "text");
  lastInput.setAttribute("placeholder", "Last Name");
  lastInput.setAttribute("name", "lastInput"); // Add name attribute

  const emailInput = createEl("input");
  emailInput.classList.add("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("placeholder", "Email");
  emailInput.setAttribute("name", "emailInput"); // Add name attribute

  const wishInput = createEl("input");
  wishInput.classList.add("input");
  wishInput.setAttribute("type", "text");
  wishInput.setAttribute("placeholder", "Your wish");
  wishInput.setAttribute("name", "wishInput"); // Add name attribute

  const selectInput = createEl("select");
  selectInput.setAttribute("name", "selectInput"); // Add name attribute

  const option1 = createEl("option");
  option1.setAttribute("value", "money");
  option1.innerText = "Money";

  const option2 = createEl("option");
  option2.setAttribute("value", "love");
  option2.innerText = "Love";

  const option3 = createEl("option");
  option3.setAttribute("value", "health");
  option3.innerText = "Health";

  const option4 = createEl("option");
  option4.setAttribute("value", "Wealth");
  option4.innerText = "Wealth";

  const option5 = createEl("option");
  option5.setAttribute("value", "Family");
  option5.innerText = "Family";

  const option6 = createEl("option");
  option6.setAttribute("value", "Career");
  option6.innerText = "Career";

  const option7 = createEl("option");
  option7.setAttribute("value", "Better grades");
  option7.innerText = "Better grades";

  const option8 = createEl("option");
  option8.setAttribute("value", "Happiness");
  option8.innerText = "Happiness";

  const option9 = createEl("option");
  option9.setAttribute("value", "Peace");
  option9.innerText = "Peace";

  const submitButton = createEl("button");
  submitButton.classList.add("submit-button");
  submitButton.setAttribute("type", "submit");
  submitButton.innerText = "Wish";

  selectInput.append(option1, option2, option3, option4, option5, option6, option7, option8, option9);
  wishForm.append(firstInput, lastInput, emailInput, wishInput, selectInput, submitButton);

  return wishForm;
}
*/