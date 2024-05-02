function enableFields() {
    document.getElementById('name').readOnly = false;
    document.getElementById('address').readOnly = false;
    document.getElementById('phone').readOnly = false;
}

function saveChanges() {
    document.getElementById('name').readOnly = true;
    document.getElementById('address').readOnly = true;
    document.getElementById('phone').readOnly = true;
}

document.addEventListener('DOMContentLoaded', function() {
    var phoneSelector = document.getElementById('phone');
    var im = new Inputmask('+7 (999) 999-9999');
    im.mask(phoneSelector);
});
