export function emptyCart() {
  const cart = document.querySelector('.cart');
  const totalPriceElement = document.querySelector('.total-price');
  const totalPriceDisplay = document.createElement('div');
  totalPriceDisplay.className = 'total-price';
  totalPriceDisplay.textContent = `Total: $0.00`;

  cart.innerHTML = '';
  cart.appendChild(totalPriceDisplay);

  let totalPrice = calculateTotalPrice(); // Recalculate the total price

  // Remove existing total price display
  if (totalPriceElement) {
    totalPriceElement.remove();
  }

  // Display the updated total price at the end of the cart
  totalPriceElement = document.createElement('div');
  totalPriceElement.className = 'total-price';
  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  cart.appendChild(totalPriceElement);
}

export function calculateTotalPrice() {
  const cartItems = document.querySelectorAll('.cart-item');
  let totalPrice = 0;

  cartItems.forEach((item) => {
    const priceString = item.querySelector('p').textContent;
    const price = parseFloat(priceString.split('Price: ')[1]);
    totalPrice += price;
  });

  return totalPrice;
}
