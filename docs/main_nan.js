console.log("✅ index_nan.js loaded");

/* =========================
   SMOOTH SCROLL
========================= */
document.documentElement.style.scrollBehavior = "smooth";

/* =========================
   FADE-IN ON SCROLL
========================= */
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(".section, .gallery img, .why-grid div").forEach(el => {
    el.classList.add("fade");
    observer.observe(el);
});

/* =========================
   HEADER SHRINK ON SCROLL
========================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});


/* =========================
   GALLERY LIGHTBOX LOGIC
========================= */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("show");
    });
});

// Close via X
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
});

// Close via background click
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("show");
    }
});