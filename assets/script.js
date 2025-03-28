document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // Show 3 slides at a time
        spaceBetween: 20, // Add spacing between slides
        loop: true, // Enables infinite loop
        // autoplay: {
        //     delay: 3000, // Auto slide every 3 seconds
        //     disableOnInteraction: false,
        // },
       
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
