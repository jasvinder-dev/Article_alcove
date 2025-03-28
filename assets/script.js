document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // Default for larger screens
        spaceBetween: 20, // Spacing between slides
        loop: true, // Enables infinite loop
        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // autoplay: {
        //     delay: 3000, // Auto slide every 3 seconds
        //     disableOnInteraction: false,
        // },

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
    const overlay = document.getElementById("overlay");

    // Function to Open Sidebar
    function openSidebar() {
        sidebar.classList.add("open");
        overlay.classList.add("show");
    }

    // Function to Close Sidebar
    function closeSidebar() {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    }

    // Open Sidebar on Button Click
    openBtn.addEventListener("click", openSidebar);

    // Close Sidebar on Close Button Click
    closeBtn.addEventListener("click", closeSidebar);

    // Close Sidebar When Clicking on Overlay
    overlay.addEventListener("click", closeSidebar);
});



