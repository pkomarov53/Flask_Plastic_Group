  $(document).ready(function(){
    function toggleContainerClass() {
      var windowWidth = $(window).width();
      if (windowWidth < 1000) {
        $(".custom-container").removeClass("container").addClass("container-fluid");
      } else {
        $(".custom-container").removeClass("container-fluid").addClass("container");
      }
    }

    // Вызываем функцию при загрузке страницы
    toggleContainerClass();

    // Вызываем функцию при изменении размера окна
    $(window).resize(function(){
      toggleContainerClass();
    });
  });

      function enableFields(fieldId) {
        document.getElementById(fieldId).readOnly = false;
    }

    function saveChanges(fieldId) {
        var value = document.getElementById(fieldId).value;
        console.log("Saving changes for field " + fieldId + ": " + value);
        // Добавьте здесь логику сохранения изменений
        document.getElementById(fieldId).readOnly = true;
    }