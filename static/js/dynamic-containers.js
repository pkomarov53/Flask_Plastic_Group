$(document).ready(function() {
    function toggleContainerClass() {
        var windowWidth = $(window).width();
        if (windowWidth < 1000) {
            $(".custom-container").removeClass("container").addClass("container-fluid");
        } else {
            $(".custom-container").removeClass("container-fluid").addClass("container");
        }
    }

    toggleContainerClass();

    $(window).resize(function() {
        toggleContainerClass();
    });
});

$(document).ready(function() {
    function toggleContainerClass() {
        var windowWidth = $(window).width();
        if (windowWidth < 1400) {
            $(".custom-col").removeClass("col-md-2").addClass("col-md-3");
        } else {
            $(".custom-col").removeClass("col-md-3").addClass("col-md-2");
        }
    }

    toggleContainerClass();

    $(window).resize(function() {
        toggleContainerClass();
    });
});





