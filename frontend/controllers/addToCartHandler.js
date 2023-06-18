export function addToCart(event) {
  const cardButton = event.target; // Get the clicked button
  const cart = document.querySelector('.cart');
  
  const wishCard = cardButton.closest('.wish-card'); // Find the closest wish-card element
  
  const title = wishCard.dataset.title;
  const price = wishCard.dataset.price;

  const div = document.createElement('div');
  div.className = 'cart-item';
  div.innerHTML = `
    <h3>${title}</h3>
    <p>Price: ${price}</p>
  `;

  cart.appendChild(div);
}
