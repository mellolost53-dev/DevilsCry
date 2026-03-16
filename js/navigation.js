
document.querySelectorAll(".hero-character").forEach(card => {
  card.addEventListener("click", () => {
    const target = card.dataset.target;
    window.location.href = `characters.html#${target}`;
  });
});
document.querySelectorAll(".hero-character").forEach(card => {
  card.addEventListener("click", () => {
    const target = card.dataset.target;
    window.location.href = `characters.html#${target}`;
  });
});

//події для карток
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('is-active'); // Це запустить анімацію хрестика
});
