const items = document.querySelectorAll('.gallery-item');
const backItems = document.querySelector('.lightbox');
const closeBtn = document.getElementById("close");
const lightboxImage = document.getElementById("lightbox-image");


items.forEach(item => {
    item.addEventListener('click', () => {
        backItems.style.display = "flex";
        const fullSizeSrc = item.src.replace("-thumbnail", "");
        lightboxImage.src = fullSizeSrc;
    });
    
});

closeBtn.addEventListener("click", () => {
    backItems.style.display = "none";
});

backItems.addEventListener("click", (event) => {
    if (event.target === backItems) {
        backItems.style.display = "none";
    }
});