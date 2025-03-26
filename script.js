var swiper = new Swiper(".mySwiper", {
    loop: true, // Infinite loop
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false, 
    },
    slidesPerView: 3, // Show 3 cards at a time
    spaceBetween: 20, // Space between slides
    navigation: { 
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true, // Enable dragging
    breakpoints: { 
        1024: { slidesPerView: 3 }, // Show 3 slides on large screens
        768: { slidesPerView: 2 },  // Show 2 slides on tablets
        480: { slidesPerView: 1 },  // Show 1 slide on mobile
        0: { slidesPerView: 1 }     // 🔹for very small screens
    },
});


var swiper_pd = new Swiper(".mySwiper-pd", {
    effect: "cards",
    grabCursor: true,
  });