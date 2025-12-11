let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {
    const cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                
                <div>
                    <h3>${item.name}</h3>
                    <p>₦${item.price}</p>
                </div>

                <div>
                    <button onclick="decrease(${index})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increase(${index})">+</button>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    document.getElementById("grandTotal").innerText = total.toLocaleString();
}

function increase(i) {
    cart[i].quantity++;
    update();
}

function decrease(i) {
    if (cart[i].quantity > 1) {
        cart[i].quantity--;
    } else {
        cart.splice(i, 1);
    }
    update();
}

function removeItem(i) {
    cart.splice(i, 1);
    update();
}

function update() {
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

loadCart();
