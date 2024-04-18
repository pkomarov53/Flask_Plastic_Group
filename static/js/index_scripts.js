document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll(".changing-text-container p");
    let index = 0;

    function showParagraph(index) {
        paragraphs.forEach((p, i) => {
            if (i === index) {
                p.classList.add("show");
            } else {
                p.classList.remove("show");
            }
        });
    }

    function nextParagraph() {
        index = (index + 1) % paragraphs.length;
        showParagraph(index);
    }

    // Показываем первый параграф при загрузке страницы
    showParagraph(index);

    // Запускаем смену параграфов через определенный интервал
    setInterval(nextParagraph, 5000); // Интервал в миллисекундах (в данном случае 3 секунды)

    function scrollToSection(buttonId, sectionId, yOffset) {
        let companyButton = document.getElementById(buttonId);
        let companySection = document.getElementById(sectionId);
        if (companyButton && companySection) { // Проверяем наличие кнопки и секции
            companyButton.addEventListener('click', function(event) {
                event.preventDefault();
                let yOffsetValue = companySection.getBoundingClientRect().top - yOffset;
                window.scrollBy({
                    top: yOffsetValue,
                    left: 0,
                    behavior: 'smooth'
                });
            });
        } else {
            console.error(`Button or section not found for IDs: ${buttonId}, ${sectionId}`);
        }
    }

    scrollToSection('companyButton', 'company-section', 150);
    scrollToSection('tapeButton', 'tape_type_1_section', 150);
    scrollToSection('designsButton', 'designs-section', 215);
    scrollToSection('tape_100_LPA', 'tape_type_1_section', 100);
    scrollToSection('tape_150_LPA', 'tape_LP-A150', 100);
    scrollToSection('tape_180_LPA', 'tape_LP-A180', 100);
    scrollToSection('tape_type_1', 'tape_type_1_section', 100);
    scrollToSection('tape_12_HC', 'tape_type_2_section', 100);
    scrollToSection('tape_type_2', 'tape_type_2_section', 100);
});


document.addEventListener('DOMContentLoaded', function() {
    let companyButton = document.getElementById('designsButton');
    let companySection = document.getElementById('designs-section');
    companyButton.addEventListener('click', function(event) {
        event.preventDefault();
        let yOffset = companySection.getBoundingClientRect().top - 215;
        window.scrollBy({
            top: yOffset,
            left: 0,
            behavior: 'smooth'
        });
    });
    $(".img-fluid").click(function(event) {
        event.stopPropagation();
        let $clickedImage = $(this);
        if(!$clickedImage.hasClass("zoomed")) {
            $(".img-fluid").removeClass("zoomed");
            $clickedImage.addClass("zoomed");
            let yOffset = companySection.getBoundingClientRect().top - 215;
            window.scrollBy({
                top: yOffset,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            $clickedImage.removeClass("zoomed");
        }
    });
    $(document).click(function(event) {
        if(!$(event.target).closest('.img-fluid').length) {
            $(".img-fluid").removeClass("zoomed");
        }
    });
});

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