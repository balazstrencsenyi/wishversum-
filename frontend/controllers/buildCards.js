import { addToCart } from './addToCartHandler.js';
import { main } from '../script.js';
import { emptyCart, calculateTotalPrice, sendOrder} from './addToCartHandler.js';

export async function buildCards() {
  const root = document.querySelector('#root');

  root.style.width = '100vw';
  root.style.height = '500vh';
  root.style.overflow = 'hidden';

  const webShop = document.createElement('div');
  webShop.className = 'webshop-container';
  webShop.id = 'webshop-container';

  const webShopHeader = document.createElement('div');
  webShopHeader.className = 'webshop-header';

  const webShopTitle = document.createElement('h1');
  webShopTitle.className = 'webshop-title';
  webShopTitle.innerText = 'Store';

  const webShopButton = document.createElement('button');
  webShopButton.className = 'webshop-button';
  webShopButton.innerText = 'Go Back';

  webShopButton.addEventListener('click', () => {
    root.innerHTML = '';
    main();
  });

  webShopHeader.append(webShopTitle, webShopButton);

  const wishesContainer = document.createElement('div');
  wishesContainer.className = 'wishes-container1';

  const webShopRightContainer = document.createElement('div');
  webShopRightContainer.className = 'webshop-right-container';

  const cartIMG = document.createElement('img');
  cartIMG.classList.add('cart-img');
  cartIMG.src = './media/cart.png';

  const cartContainer = document.createElement('div');
  cartContainer.classList.add('cart-container');

  const cart = document.createElement('div');
  cart.classList.add('cart');

  const cartButtonContainer = document.createElement('div');
  cartButtonContainer.classList.add('cart-button-container');

  const emptyButton = document.createElement('button');
  emptyButton.classList.add('empty-button');
  emptyButton.innerText = 'Empty Cart';

  emptyButton.addEventListener('click', emptyCart);

  const cartButton = document.createElement('button');
  cartButton.classList.add('cart-button');
  cartButton.innerText = 'Send Order';
  cartButton.addEventListener('click', sendOrder);

  cartButtonContainer.append(emptyButton, cartButton);
  cartContainer.append(cart, cartButtonContainer);

  webShopRightContainer.append(cartIMG, cartContainer);

  const response = await fetch('/wishes');
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    const card = document.createElement('div');
    card.className = 'wish-card';

    card.dataset.title = data[i].title;
    card.dataset.price = data[i].price;
    card.dataset.text = data[i].text;

    const cardButton = document.createElement('button');
    cardButton.className = 'card-button';
    cardButton.innerText = 'Add to cart';

    cardButton.addEventListener('click', addToCart);

    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.innerText = data[i].title;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerText = data[i].text;

    const cardPrice = document.createElement('p');
    cardPrice.className = 'card-price';
    cardPrice.innerText = data[i].price;

    const cardUnder = document.createElement('div');
    cardUnder.className = 'card-under';

    cardUnder.appendChild(cardPrice);
    cardUnder.appendChild(cardButton);

    card.appendChild(cardTitle);
    card.appendChild(cardText);
    card.appendChild(cardUnder);

    wishesContainer.appendChild(card);
  }

  webShop.append(wishesContainer, webShopRightContainer, webShopHeader);
  root.appendChild(webShop);
  window.calculateTotalPrice = calculateTotalPrice;
  return webShop;
}
