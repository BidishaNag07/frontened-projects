// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple form validation alerts for Book and Contact forms
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your request has been submitted successfully!");
    form.reset();
  });
});

// Simple image lightbox effect for Gallery images (optional)
const galleryImages = document.querySelectorAll("#gallery img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("lightbox-overlay");
    overlay.innerHTML = `<img src="${img.src}" class="lightbox-image">`;
    document.body.appendChild(overlay);
    overlay.addEventListener("click", () => overlay.remove());
  });
});
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-up').forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});
