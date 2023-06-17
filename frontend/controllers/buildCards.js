import { createEl } from '../utils/utils.js';

export function buildCards () {

  const wishesContainer = createEl("div", { className: "wishes-container" });
  wishesContainer.id = "wishes-container";

  for (let i = 0; i < 8; i++) {
    const card = createEl("div", { className: "wish-card" });

    const cardTitle = createEl("h2", { className: "card-title" });
    const cardIMG = createEl("img", { className: "card-img" });
    const cardText = createEl("p", { className: "card-text" });

    const cardUnder = createEl("div", { className: "card-under" });
    const cardInput = createEl("input", { className: "card-input" });
    cardInput.type = "number";
    const cardButton = createEl("button", { className: "card-button" });
    cardUnder.append(cardInput, cardButton)
    card.append(cardTitle, cardIMG, cardText, cardUnder);
    wishesContainer.append(card);
}

return wishesContainer;
}

