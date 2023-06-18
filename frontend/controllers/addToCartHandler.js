let totalPrice = 0; // Initialize total price

export function addToCart(event) {
  const cardButton = event.target; // Get the clicked button
  const cart = document.querySelector('.cart');
  const totalPriceElement = document.querySelector('.total-price');

  const wishCard = cardButton.closest('.wish-card'); // Find the closest wish-card element

  const title = wishCard.dataset.title;
  const price = parseFloat(wishCard.dataset.price); // Convert the price to a floating-point number

  const div = document.createElement('div');
  div.className = 'cart-item';
  div.innerHTML = `
    <h3>${title}</h3>
    <p>Price: ${price}</p>
  `;

  cart.appendChild(div);

  totalPrice += price; // Update total price

  // Remove existing total price display
  if (totalPriceElement) {
    totalPriceElement.remove();
  }

  // Display the total price at the end of the cart
  const totalPriceDisplay = document.createElement('div');
  totalPriceDisplay.className = 'total-price';
  totalPriceDisplay.textContent = `Total: $${totalPrice.toFixed(2)}`;
  cart.appendChild(totalPriceDisplay);
}
