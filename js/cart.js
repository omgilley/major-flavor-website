// =============================================
// MAJOR FLAVOR — Cart System
// =============================================

const cart = [];

const cartFab = document.getElementById('cartFab');
const cartFabCount = document.getElementById('cartFabCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItemsEl = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartTotalEl = document.getElementById('cartTotal');
const clearCartBtn = document.getElementById('clearCart');

// Add to cart
document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.order-item');
    const name = item.dataset.name;
    const price = parseFloat(item.dataset.price);

    const existing = cart.find(i => i.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }

    // Animate button
    btn.textContent = '✓';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = '+';
      btn.classList.remove('added');
    }, 600);

    updateCart();
  });
});

// Open/close cart
cartFab.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
clearCartBtn.addEventListener('click', () => {
  cart.length = 0;
  updateCart();
  closeCart();
});

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function updateCart() {
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

  // FAB
  if (totalItems > 0) {
    cartFab.style.display = 'flex';
    cartFabCount.textContent = totalItems;
  } else {
    cartFab.style.display = 'none';
  }

  // Cart items
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    cartFooter.style.display = 'none';
  } else {
    cartFooter.style.display = 'block';
    cartItemsEl.innerHTML = cart.map((item, idx) => `
      <div class="cart-line">
        <div class="cart-line-info">
          <span class="cart-line-name">${item.name}</span>
          <span class="cart-line-price">$${(item.price * item.qty).toFixed(2)}</span>
        </div>
        <div class="cart-line-controls">
          <button class="qty-btn" onclick="changeQty(${idx}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button>
          <button class="remove-btn" onclick="removeItem(${idx})">✕</button>
        </div>
      </div>
    `).join('');
  }

  cartTotalEl.textContent = '$' + totalPrice.toFixed(2);
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCart();
}

function removeItem(idx) {
  cart.splice(idx, 1);
  updateCart();
}
