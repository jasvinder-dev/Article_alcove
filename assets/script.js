document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // Default for larger screens
        spaceBetween: 20, // Spacing between slides
        loop: true, // Enables infinite loop
        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: { // For very small screens
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: { // Tablets and up
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: { // Desktops and larger screens
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.getElementById("openSidebar");
    const closeBtn = document.getElementById("closeSidebar");

    // Open Sidebar
    openBtn.addEventListener("click", function () {
        sidebar.classList.add("open");
    });

    // Close Sidebar
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("open");
    });

    // Close Sidebar When Clicking Outside
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
            sidebar.classList.remove("open");
        }
    });
});


