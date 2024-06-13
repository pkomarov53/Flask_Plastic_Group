document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    const cartDataInput = document.getElementById('cart-data');
    const maxCartItems = 20;
    const checkoutButton = document.getElementById('checkout');

    function updateCartTable() {
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<tr><td colspan="4" class="text-center">Ваша корзина пуста</td></tr>';
            disableCheckoutButton(true); // Disable checkout button when cart is empty
        } else {
            cartItemsContainer.innerHTML = cartItems.map(item => `
                <tr>
                    <td>${item.product}</td>
                    <td>${item.quantity}</td>
                    <td>${item.region}</td>
                    <td>${item.total.toFixed(2)} руб.</td>
                </tr>
            `).join('');
            disableCheckoutButton(false); // Enable checkout button when cart has items
        }
        updateCartTotal();
    }

    function disableCheckoutButton(disable) {
        checkoutButton.disabled = disable;
    }

    function updateCartTotal() {
        const totalCost = cartItems.reduce((sum, item) => sum + item.total, 0);
        cartTotalContainer.innerText = `ИТОГО: ${totalCost.toFixed(2)} руб.`;
    }

    function addToCart(productText, quantity, regionText, total) {
        const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

        if (totalQuantity + quantity > maxCartItems) {
            alert(`Вы не можете добавить в корзину больше ${maxCartItems} товаров.`);
            return;
        }

        const existingItem = cartItems.find(item => item.product === productText && item.region === regionText);

        if (existingItem) {
            existingItem.quantity += quantity;
            existingItem.total += total;
        } else {
            cartItems.push({ product: productText, quantity, region: regionText, total });
        }

        updateCartTable();
    }

    document.getElementById('calculator-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const productSelect = document.getElementById('product');
        const productText = productSelect.options[productSelect.selectedIndex].text;
        const productPrice = parseInt(productSelect.value);

        const quantity = parseInt(document.getElementById('quantity').value);

        const regionSelect = document.getElementById('region');
        const regionText = regionSelect.options[regionSelect.selectedIndex].text;
        const regionCost = parseInt(regionSelect.value);

        if (isNaN(productPrice) || isNaN(quantity) || isNaN(regionCost)) {
            alert("Пожалуйста, выберите состав заказа перед добавлением его в корзину.");
            return;
        }

        const total = (productPrice * quantity) + regionCost;
        addToCart(productText, quantity, regionText, total);
    });

    document.getElementById('checkout-form').addEventListener('submit', function (event) {
        if (cartItems.length === 0) {
            event.preventDefault();
            alert("Нельзя перейти к оплате, так как ваша корзина пуста.");
        } else {
            const cartData = JSON.stringify(cartItems);
            cartDataInput.value = cartData;
        }
    });

    new Cleave('#phone', {
        phone: true,
        phoneRegionCode: 'RU'
    });
});
