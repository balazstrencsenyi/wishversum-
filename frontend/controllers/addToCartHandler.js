let totalPrice = 0; // Initialize total price

export function addToCart(event) {
  const cardButton = event.target;
  const cart = document.querySelector('.cart');
  const totalPriceElement = document.querySelector('.total-price');

  const wishCard = cardButton.closest('.wish-card');
  const title = wishCard.dataset.title;
  const price = parseFloat(wishCard.dataset.price);

  const existingCartItem = cart.querySelector(`.cart-item[data-title="${title}"]`);

  if (existingCartItem) {
    const quantityElement = existingCartItem.querySelector('.item-quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
  } else {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.dataset.title = title;
    div.innerHTML = `
      <h3>${title}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: <span class="item-quantity">1</span></p>
    `;

    cart.appendChild(div);
  }

  totalPrice += price; // Update total price

  updateTotalPrice(); // Update the total price display
}

export function emptyCart() {
  const cart = document.querySelector('.cart');

  // Clear the cart HTML
  cart.innerHTML = '';

  totalPrice = 0; // Reset total price

  updateTotalPrice(); // Update the total price display
}

export function updateTotalPrice() {
  const cart = document.querySelector('.cart');
  const totalPriceElement = document.querySelector('.total-price');

  // Remove existing total price display
  if (totalPriceElement) {
    totalPriceElement.remove();
  }

  // Calculate the total price
  let totalPrice = calculateTotalPrice();

  // Create a new total price display
  const totalPriceDisplay = document.createElement('div');
  totalPriceDisplay.className = 'total-price';
  totalPriceDisplay.textContent = `Total: $${totalPrice.toFixed(2)}`;

  // Append the total price display to the cart
  cart.appendChild(totalPriceDisplay);
}

export function calculateTotalPrice() {
  const cartItems = document.querySelectorAll('.cart-item');
  let totalPrice = 0;

  cartItems.forEach((item) => {
    const priceString = item.querySelector('p').textContent;
    const price = parseFloat(priceString.split('Price: ')[1]);
    const quantityElement = item.querySelector('.item-quantity');
    const quantity = parseInt(quantityElement.textContent);
    totalPrice += price * quantity;
  });

  return totalPrice;
}

export function sendOrder() {

  const cartItems = document.querySelectorAll('.cart-item');
  const orderData = [];

  cartItems.forEach((item) => {
    const title = item.querySelector('h3').textContent;
    const priceString = item.querySelector('p').textContent;
    const price = parseFloat(priceString.split('Price: ')[1]);
    const quantityElement = item.querySelector('.item-quantity');
    const quantity = parseInt(quantityElement.textContent);

    orderData.push({
      title: title,
      price: price,
      quantity: quantity
    });
  });

  // Send the order data to the server
  fetch('/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data); // JSON response from the server
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

