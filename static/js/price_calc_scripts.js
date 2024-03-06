const tapeTypes = {
  "standard": 5, // Стандартный скотч
  "premium": 7,  // Премиум скотч
  "extra": 10    // Экстра-прочный скотч
};

function getTypePrice(selectedType) {
  return tapeTypes[selectedType] || 0; // Возвращаем цену, если тип существует, иначе 0
}

const lengthMultipliers = {
  "short": 10,   // Короткий рулон
  "medium": 15,  // Средний рулон
  "long": 20     // Длинный рулон
};

function getLengthMultiplier(selectedLength) {
  return lengthMultipliers[selectedLength] || 0; // Возвращаем множитель, если длина существует, иначе 0
}

function getQuantity() {
  const quantityElement = document.getElementById("quantity");
  const selectedQuantity = parseInt(quantityElement.value) || 0; // Преобразуем в число, или 0 если неверный формат
  return selectedQuantity;
}

const shippingCosts = {
  "moscow": 0.5,
  "spb": 0.8,
  "ekb": 1.2
};

function getRegionShippingCost(selectedRegion, quantity) {
  const coefficient = shippingCosts[selectedRegion] || 1; // Возвращаем коэффициент, если регион существует, иначе 1
  return 50 * coefficient * quantity;
}

function calculate() {
  const selectedType = document.getElementById("type").value;
  const selectedLength = document.getElementById("length").value;
  const selectedRegion = document.getElementById("region").value;

  const typePrice = getTypePrice(selectedType);
  const lengthMultiplier = getLengthMultiplier(selectedLength);
  const quantity = getQuantity();
  const shippingCost = getRegionShippingCost(selectedRegion, quantity);

  const totalScotchPrice = typePrice * lengthMultiplier * quantity;
  const totalPrice = totalScotchPrice + shippingCost;

  const resultElement = document.getElementById("result");

  resultElement.innerHTML = `
    1. Общая стоимость скотча: ${totalScotchPrice} рублей,<br>
    2. Стоимость доставки: ${shippingCost} рублей,<br>
    3. Общая стоимость заказа: ${totalPrice} рублей.
  `;
}
