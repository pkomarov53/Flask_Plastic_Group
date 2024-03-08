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
});


document.addEventListener('DOMContentLoaded', function() {
    let companyButton = document.getElementById('tapeButton');
    let companySection = document.getElementById('tape_type_1_section');
    companyButton.addEventListener('click', function(event) {
        event.preventDefault();
        let yOffset = companySection.getBoundingClientRect().top - 150;
        window.scrollBy({
            top: yOffset,
            left: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let companyButton = document.getElementById('contactsButton');
    let companySection = document.getElementById('contacts-section');
    companyButton.addEventListener('click', function(event) {
        event.preventDefault();
        companySection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let companyButton = document.getElementById('tape_type_1');
    let companySection = document.getElementById('tape_type_1_section');
    companyButton.addEventListener('click', function(event) {
        event.preventDefault();
        let yOffset = companySection.getBoundingClientRect().top - 100;
        window.scrollBy({
            top: yOffset,
            left: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let companyButton = document.getElementById('tape_100_LPA');
    let companySection = document.getElementById('tape_type_1_section');
    companyButton.addEventListener('click', function(event) {
        event.preventDefault();
        let yOffset = companySection.getBoundingClientRect().top - 100;
        window.scrollBy({
            top: yOffset,
            left: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let companyButton = document.getElementById('tape_150_LPA');
    let companySection = document.getElementById('tape_LP-A150');
    companyButton.addEventListener('click', function(event) {
        event.preventDefault();
        let yOffset = companySection.getBoundingClientRect().top - 100;
        window.scrollBy({
            top: yOffset,
            left: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let companyButton = document.getElementById('tape_180_LPA');
    let companySection = document.getElementById('tape_LP-A180');
    companyButton.addEventListener('click', function(event) {
        event.preventDefault();
        let yOffset = companySection.getBoundingClientRect().top - 100;
        window.scrollBy({
            top: yOffset,
            left: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let companyButton = document.getElementById('tape_type_2');
    let companySection = document.getElementById('tape_type_1_section');
    companyButton.addEventListener('click', function(event) {
        event.preventDefault();
        let yOffset = companySection.getBoundingClientRect().top - 100;
        window.scrollBy({
            top: yOffset,
            left: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let companyButton = document.getElementById('tape_12_HC');
    let companySection = document.getElementById('tape_type_2_section');
    companyButton.addEventListener('click', function(event) {
        event.preventDefault();
        let yOffset = companySection.getBoundingClientRect().top - 100;
        window.scrollBy({
            top: yOffset,
            left: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let companyButton = document.getElementById('tape_type_2');
    let companySection = document.getElementById('tape_type_2_section');
    companyButton.addEventListener('click', function(event) {
        event.preventDefault();
        let yOffset = companySection.getBoundingClientRect().top - 100;
        window.scrollBy({
            top: yOffset,
            left: 0,
            behavior: 'smooth'
        });
    });
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
            // Вызов функции пролистывания при увеличении картинки
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
