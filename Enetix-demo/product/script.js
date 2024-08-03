function initializeGallery() {
    document.getElementById('mainImage').src = 'img/ring1.jpg';
}

function changeImage(src) {
    document.getElementById('mainImage').src = src;
}


function increaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
    updateTotalPrice();
}

function decreaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        updateTotalPrice();
    }
}

function updateTotalPrice() {
    var quantity = parseInt(document.getElementById('quantity').value, 10);
    var pricePerItem = parseInt(document.getElementById('price').getAttribute('data-price'), 10);
    var totalPrice = quantity * pricePerItem;
    document.getElementById('price').textContent = totalPrice;
}

