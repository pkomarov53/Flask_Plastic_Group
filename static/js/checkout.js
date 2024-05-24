document.addEventListener('DOMContentLoaded', function () {
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
});
