$(document).ready(function () {


    $('.main-slider').owlCarousel({
        nav: false,
        items: 1,
        center: true,
        dots: false,
        smartSpeed: 500
    })

    $('#mainSectionSlider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        center: true,
        items: 1
    })


    $('#mainSectionSlider').on('mousedown.owl.core', function (event) {
        event.preventDefault()
        event.stopPropagation()
    });


    /* Slider Navigation */
    $("#homeNavLink").on("click", function () {
        $('.main-slider').trigger('to.owl.carousel', 0);
    });
    $("#aboutNavLink").on("click", function () {
        $('.main-slider').trigger('to.owl.carousel', 1);
    });
    $("#experienceNavLink").on("click", function () {
        $('.main-slider').trigger('to.owl.carousel', 2);
    });
    $("#contactNavLink").on("click", function () {
        $('.main-slider').trigger('to.owl.carousel', 3);
    });

    
    $("#aboutLink").on("click", function () {
        $('.main-slider').trigger('to.owl.carousel', 1);
    });
    /* Slider Navigation */
});