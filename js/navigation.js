
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