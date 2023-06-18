import { createHeader, createLandingPage, saveData } from './saveData.js';
import {main} from '../script.js';


export  async function buildCards() {

  const root = document.querySelector('#root');

  root.style.width = '100vw';
  root.style.height = '300vh';
  root.style.overflow = 'hidden';

  const webShop = document.createElement('div');
  webShop.className = 'webshop-container';

  const webShopHeader = document.createElement('div');
  webShopHeader.className = 'webshop-header';

  const webShopTitle = document.createElement('h1');
  webShopTitle.className = 'webshop-title';
  webShopTitle.innerText = 'Webshop';

  const webShopButton = document.createElement('button');
  webShopButton.className = 'webshop-button';
  webShopButton.innerText = 'Go back';

  webShopButton.addEventListener('click', () => {
    root.innerHTML = '';
    main();
  });

  webShopHeader.append(webShopTitle, webShopButton);

  const wishesContainer = document.createElement('div');
  wishesContainer.className = 'wishes-container1';

  const webShopRightContainer = document.createElement('div');
  webShopRightContainer.className = 'webshop-right-container';

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

    cardTitle.innerText = data[i].title;
    /*cardIMG.src = `/wishes/pictures/${data[i].id}.jpg`;*/
    cardText.innerText = data[i].text;
      
    wishesContainer.appendChild(card);
   
  }

 
  webShop.append(wishesContainer, webShopRightContainer, webShopHeader);
  root.appendChild(webShop);
  return webShop;

}
