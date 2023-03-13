const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const mapsGallery = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevBtn.addEventListener('click', function () {
    mapsGallery[currentlySelected].classList.remove("active");
    currentlySelected--;
    mapsGallery[currentlySelected].classList.add("active");
    nextBtn.disabled = false;

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function () {
    mapsGallery[currentlySelected].classList.remove("active");
    currentlySelected++;
    mapsGallery[currentlySelected].classList.add("active");
    prevBtn.disabled = false;

    if (mapsGallery.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }
});