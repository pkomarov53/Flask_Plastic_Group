document.addEventListener('DOMContentLoaded', function() {
    new Cleave('#card_number', {
        creditCard: true,
        onCreditCardTypeChanged: function (type) {
            // update UI ...
        }
    });

    new Cleave('#card_expiry', {
        date: true,
        datePattern: ['m', 'y']
    });

    new Cleave('#card_cvc', {
        blocks: [3],
        numericOnly: true
    });

    document.getElementById('paymentForm').addEventListener('submit', function(event) {
        var cardNumber = document.getElementById('card_number').value;
        var cardExpiry = document.getElementById('card_expiry').value;
        var cardCvc = document.getElementById('card_cvc').value;

        var isValid = true;

        // Validate card number (at least 16 digits)
        if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) {
            isValid = false;
            alert('Неверный номер карты. Пожалуйста, введите 16 цифр.');
        }

        // Validate expiry date (MM/YY format)
        if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
            isValid = false;
            alert('Неверный срок действия карты. Пожалуйста, используйте формат MM/YY.');
        }

        // Validate CVC (3 digits)
        if (!/^\d{3}$/.test(cardCvc)) {
            isValid = false;
            alert('Неверный CVC. Пожалуйста, введите 3 цифры.');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});