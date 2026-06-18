const button = document.getElementById("confetti-btn");

button.addEventListener("click", () => {

    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 4,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 4,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();
});