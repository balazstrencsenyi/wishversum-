export function addToCart(event) {
  const cardButton = event.target;
  const cart = document.querySelector('.cart');
  let totalPriceElement = document.querySelector('.total-price');

  const wishCard = cardButton.closest('.wish-card');
  const title = wishCard.dataset.title;
  const price = parseFloat(wishCard.dataset.price);

  const div = document.createElement('div');
  div.className = 'cart-item';
  div.innerHTML = `
    <h3>${title}</h3>
    <p>Price: ${price}</p>
  `;

  cart.appendChild(div);

  let totalPrice = calculateTotalPrice(); // Calculate the total price

  // Remove existing total price display
  if (totalPriceElement) {
    totalPriceElement.remove();
  }

  // Display the total price at the end of the cart
  totalPriceElement = document.createElement('div');
  totalPriceElement.className = 'total-price';
  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  cart.appendChild(totalPriceElement);
}

function calculateTotalPrice() {
  const cartItems = document.querySelectorAll('.cart-item');
  let totalPrice = 0;

  cartItems.forEach((item) => {
    const priceString = item.querySelector('p').textContent;
    const price = parseFloat(priceString.split('Price: ')[1]);
    totalPrice += price;
  });

  return totalPrice;
}
