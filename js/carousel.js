const images = [
    'img/baby-yoda.svg',
    'img/banana.svg',
    'img/girl.svg',
    'img/viking.svg',
]
let currentIdx = 0;
function slide() {
    currentIdx = ++currentIdx > images.length - 1 ? 0 : currentIdx;
    showSlide(currentIdx);
}
setInterval(slide, 3000);
function back() {
    currentIdx = --currentIdx < 0 ? images.length - 1 : currentIdx;
    showSlide(currentIdx);
}
document.querySelector('.carousel .btn-back').addEventListener('click', back);
function showSlide(idx) {
    document.querySelector('.carousel img').src = images[idx];
}