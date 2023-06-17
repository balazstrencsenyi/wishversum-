import { createEl } from '../utils/utils.js';
import { post } from "../utils/utils.js";
import { buildCards} from "./buildCards.js";

export async function saveData() {
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

  // Add click event listeners to menu items
  home.addEventListener("click", () => {
    document.getElementById("first-page").scrollIntoView({
      behavior: "smooth"
    });
  });

  about.addEventListener("click", () => {
    document.getElementById("second-page").scrollIntoView({
      behavior: "smooth"
    });
  });

  wish.addEventListener("click", () => {
    document.getElementById("third-page").scrollIntoView({
      behavior: "smooth"
    });
  });

  faq.addEventListener("click", () => {
    document.getElementById("fourth-page").scrollIntoView({
      behavior: "smooth"
    });
  });

  contact.addEventListener("click", () => {
    document.getElementById("fifth-page").scrollIntoView({
      behavior: "smooth"
    });
  });

  menuContainer.append(home, about, wish, faq, contact);
  headerContainer.append(h1, menuContainer);
  return headerContainer;
}

export function createLandingPage() {
  const middleContainer = createEl("div");
  middleContainer.classList.add("middle-container");

  const firstPage = createEl("div");
  firstPage.classList.add("first-page");
  firstPage.id = "first-page";

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
    document.getElementById("third-page").scrollIntoView({
      behavior: "smooth"
    });
  });


  
  firstPage.append(card);
  card.append(text, text2, arrow, button);
  middleContainer.append(firstPage);

  //create second page for landing page with about us
  const secondPage = createEl("div");
  secondPage.classList.add("second-page");
  secondPage.id = "second-page";

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
  thirdPage.id = "third-page";

  const wishesContainer = createEl("div");
  wishesContainer.classList.add("wishes-container");

  const wishFormContainer = createEl("div");
  wishFormContainer.classList.add("wish-form-container");

  const wishForm = createEl("form");
  wishForm.classList.add("wish-form");

  const labelContainer = createEl("div");
  labelContainer.classList.add("label-container");
  const label = createEl("label");
  label.classList.add("label");
  label.innerText = "First Name:";
  const firstInput = createEl("input");
  firstInput.classList.add("input");
  firstInput.setAttribute("type", "text");
  firstInput.setAttribute("placeholder", "Tim");
  firstInput.setAttribute("name", "firstInput"); // Add name attribute
  labelContainer.append(label, firstInput);

  const label1Container = createEl("div");
  label1Container.classList.add("label-container");
  const label1 = createEl("label");
  label1.classList.add("label");
  label1.innerText = "Last Name:";
  const lastInput = createEl("input");
  lastInput.classList.add("input");
  lastInput.id = "last-name";
  lastInput.setAttribute("type", "text");
  lastInput.setAttribute("placeholder", "Bennett");
  lastInput.setAttribute("name", "lastInput"); // Add name attribute
  label1Container.append(label1, lastInput);

  const label2Container = createEl("div");
  label2Container.classList.add("label-container");
  const label2 = createEl("label");
  label2.classList.add("label");
  label2.innerText = "Email:";
  const emailInput = createEl("input");
  emailInput.classList.add("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("placeholder", "timbennett@gmail.com");
  emailInput.setAttribute("name", "emailInput"); // Add name attribute
  label2Container.append(label2, emailInput);

  const label3Container = createEl("div");
  label3Container.classList.add("label-container");
  const label3 = createEl("label");
  label3.classList.add("label");
  label3.innerText = "Date of Birth:";
  const wishInput = createEl("input");
  wishInput.classList.add("input");
  wishInput.setAttribute("type", "text");
  wishInput.setAttribute("placeholder", "YYYY-MM-DD");
  wishInput.setAttribute("name", "wishInput"); // Add name attribute
  label3Container.append(label3, wishInput);

  const label4Container = createEl("div");
  label4Container.classList.add("label-container");
  const label4 = createEl("label");
  label4.classList.add("label");
  label4.innerText = "Astrological-Sign:";
  const selectInput = createEl("select");
  selectInput.setAttribute("name", "selectInput"); // Add name attribute
  label4Container.append(label4, selectInput);

  const option1 = createEl("option");
  option1.setAttribute("value", "Capricorn");
  option1.innerText = "Capricorn";

  const option2 = createEl("option");
  option2.setAttribute("value", "love");
  option2.innerText = "Aquarius";

  const option3 = createEl("option");
  option3.setAttribute("value", "health");
  option3.innerText = "Taurus";

  const option4 = createEl("option");
  option4.setAttribute("value", "Wealth");
  option4.innerText = "Leo";

  const option5 = createEl("option");
  option5.setAttribute("value", "Family");
  option5.innerText = "Scorpio";

  const option6 = createEl("option");
  option6.setAttribute("value", "Career");
  option6.innerText = "Gemini";

  const option7 = createEl("option");
  option7.setAttribute("value", "Better grades");
  option7.innerText = "Sagiattarius";

  const option8 = createEl("option");
  option8.setAttribute("value", "Happiness");
  option8.innerText = "Aries";

  const option9 = createEl("option");
  option9.setAttribute("value", "Peace");
  option9.innerText = "Libra";

  const option10 = createEl("option");
  option10.setAttribute("value", "Fun");
  option10.innerText = "Pisces";

  const option11 = createEl("option");
  option11.setAttribute("value", "Other");
  option11.innerText = "Cancer";

  const option12 = createEl("option");
  option12.setAttribute("value", "Other");
  option12.innerText = "Virgo";


  const submitButton = createEl("button");
  submitButton.classList.add("submit-button");
  submitButton.setAttribute("type", "submit");
  submitButton.innerText = "Wish";
  

  selectInput.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12);
  wishForm.append(labelContainer, label1Container, label2Container, label3Container,  label4Container, submitButton);
  wishFormContainer.append(wishForm);
  thirdPage.append(wishesContainer,wishFormContainer);
  middleContainer.append(thirdPage);

  buildCards();

  //create fourth page for landing page with FAQ

  const fourthPage = createEl("div");
  fourthPage.classList.add("fourth-page");
  fourthPage.id = "fourth-page";

  const faqContainer = createEl("div");
  faqContainer.classList.add("faq-container");

  const faqText = createEl("div");
  faqText.classList.add("faq-text");
  faqText.innerText = "Frequently Asked Questions";

  const faqQuestion1 = createEl("div");
  faqQuestion1.classList.add("faq-question");
  faqQuestion1.innerText = "How do I make a wish?";
  const faqAnswer1 = createEl("div");
  faqAnswer1.classList.add("faq-answer");
  faqAnswer1.innerText = "Click on the button 'Make a wish' and fill out the form. We will contact you as soon as possible.";

  const faqQuestion2 = createEl("div");
  faqQuestion2.classList.add("faq-question");
  faqQuestion2.innerText = "How much does it cost to make a wish?";
  const faqAnswer2 = createEl("div");
  faqAnswer2.classList.add("faq-answer");
  faqAnswer2.innerText = "It is free to make a wish. However, if you want to support our work, you can donate any amount of money.";

  const faqQuestion3 = createEl("div");
  faqQuestion3.classList.add("faq-question");
  faqQuestion3.innerText = "How long does it take to fulfill a wish?";
  const faqAnswer3 = createEl("div");
  faqAnswer3.classList.add("faq-answer");
  faqAnswer3.innerText = "It depends on the wish. We will contact you as soon as possible.";

  const faqQuestion4 = createEl("div");
  faqQuestion4.classList.add("faq-question");
  faqQuestion4.innerText = "How can I support your work?";
  const faqAnswer4 = createEl("div");
  faqAnswer4.classList.add("faq-answer");
  faqAnswer4.innerText = "You can support our work by donating any amount of money.";

  faqContainer.append(faqText, faqQuestion1, faqAnswer1, faqQuestion2, faqAnswer2, faqQuestion3, faqAnswer3, faqQuestion4, faqAnswer4);
  fourthPage.append(faqContainer);
  middleContainer.append(fourthPage);

  //create fifth page for landing page with contact us

  const fifthPage = createEl("div");
  fifthPage.classList.add("fifth-page");
  fifthPage.id = "fifth-page";

  const contactContainer = createEl("div");
  contactContainer.classList.add("contact-container");

  const contactCard = createEl("div");
  contactCard.classList.add("contact-card");

  const contactText = createEl("div");
  contactText.classList.add("contact-text");
  contactText.innerText = "Contact us";

  const textContainer2 = createEl("div");
  textContainer2.classList.add("text-container2");

  const contactQuestion1 = createEl("div");
  contactQuestion1.classList.add("contact-question");
  contactQuestion1.innerText = "How can I contact you?";
  
  const contactAnswer1 = createEl("div");
  contactAnswer1.classList.add("contact-answer");
  contactAnswer1.innerText = "You can contact us by sending an email to wishversum@gmail.com.";
  
  const contactAnswer2 = createEl("div");
  contactAnswer2.classList.add("contact-answer");
  contactAnswer2.innerText = "You can also contact us by calling +49 123 456 789.";
  
  const contactQuestion2 = createEl("div");
  contactQuestion2.classList.add("contact-question");
  contactQuestion2.innerText = "Where are you located?";
  
  const contactAnswer3 = createEl("div");
  contactAnswer3.classList.add("contact-answer");
  contactAnswer3.innerText = "We are located in Budapest, Hungary.";
  
  const contactQuestion3 = createEl("div");
  contactQuestion3.classList.add("contact-question");
  contactQuestion3.innerText = "What are your opening hours?";
  
  const contactAnswer4 = createEl("div");
  contactAnswer4.classList.add("contact-answer");
  contactAnswer4.innerText = "We are open 24/7.";

  textContainer2.append(contactQuestion1, contactAnswer1, contactAnswer2, contactQuestion2, contactAnswer3, contactQuestion3, contactAnswer4);

  const logoContainer = createEl("div");
  logoContainer.classList.add("logo-container");

  const logo = createEl("img");
  logo.classList.add("logo");
  logo.setAttribute("src", "media/iglogo.png");

  const logo2 = createEl("img");
  logo2.classList.add("logo");
  logo2.setAttribute("src", "media/fblogo.png");

  logoContainer.append(logo, logo2);

  contactCard.append( 
    contactText,
    textContainer2, logoContainer);
  
  contactContainer.append(
    contactCard
  );
  

  const imageContainer2 = createEl("div");
  imageContainer2.classList.add("image-container2");

  const image2 = createEl("img");
  image2.classList.add("contact-image");
  image2.setAttribute("src", "media/contact.png");

  imageContainer2.append(image2);
  fifthPage.append(contactContainer, imageContainer2);
  middleContainer.append(fifthPage);



  return middleContainer;

}
