export async function buildCards() {
  const wishesContainer = document.createElement('div');
  wishesContainer.className = 'wishes-container1';

  const response = await fetch('/wishes');
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    const card = document.createElement('div');
    card.className = 'wish-card';

    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';

    const cardIMG = document.createElement('img');
    cardIMG.className = 'card-img';

    const cardText = document.createElement('p');
    cardText.className = 'card-text';

    const cardUnder = document.createElement('div');
    cardUnder.className = 'card-under';

    const cardInput = document.createElement('input');
    cardInput.className = 'card-input';
    cardInput.type = 'number';

    const cardButton = document.createElement('button');
    cardButton.className = 'card-button';
    cardButton.innerText = 'Add to cart';

    cardUnder.appendChild(cardInput);
    cardUnder.appendChild(cardButton);

    card.appendChild(cardTitle);
    card.appendChild(cardIMG);
    card.appendChild(cardText);
    card.appendChild(cardUnder);

    wishesContainer.appendChild(card);

    cardTitle.innerText = data[i].title;
    /*cardIMG.src = `/wishes/pictures/${data[i].id}.jpg`;*/
    cardText.innerText = data[i].text;

    const wishesContainer1 = document.querySelector('.wishes-container');
    wishesContainer1.appendChild(wishesContainer);
  }

  return wishesContainer;

}
