const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const category = card.innerText;
        alert(`you are viewing details for: ${category}`);
    });
});