function enableFields(fieldId) {
    document.getElementById(fieldId).readOnly = false;
}

function saveChanges(fieldId) {
    var value = document.getElementById(fieldId).value;
    console.log("Saving changes for field " + fieldId + ": " + value);
    // Добавьте здесь логику сохранения изменений
    document.getElementById(fieldId).readOnly = true;
}