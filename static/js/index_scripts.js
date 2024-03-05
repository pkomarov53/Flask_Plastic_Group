document.addEventListener('DOMContentLoaded', function() {
	let companyButton = document.getElementById('companyButton');
	let companySection = document.getElementById('company-section');
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
        if (!$clickedImage.hasClass("zoomed")) {
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
        if (!$(event.target).closest('.img-fluid').length) {
            $(".img-fluid").removeClass("zoomed");
        }
    });
});

