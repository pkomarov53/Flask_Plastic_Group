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