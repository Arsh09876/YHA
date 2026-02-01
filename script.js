
document.addEventListener("DOMContentLoaded", () => {
    const rulesSection = document.querySelector(".rules-section");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.3 }
    );

    if (rulesSection) {
        observer.observe(rulesSection);
    }
});
