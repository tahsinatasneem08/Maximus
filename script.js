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




const card = document.querySelector(".left-card");

let isFlipped = false;

/* TILT */

card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = (x - centerX) / 20;
    const rotateX = -(y - centerY) / 20;

    const flipRotation = isFlipped ? 180 : 0;

    card.style.transform =
        `rotateY(${flipRotation + rotateY}deg)
         rotateX(${rotateX}deg)`;
});

/* RESET */

card.addEventListener("mouseleave", () => {

    const flipRotation = isFlipped ? 180 : 0;

    card.style.transform =
        `rotateY(${flipRotation}deg)
         rotateX(0deg)`;

});

/* DOUBLE CLICK FLIP */

card.addEventListener("dblclick", () => {

    isFlipped = !isFlipped;

    card.style.transition = "transform 0.7s ease";

    card.style.transform =
        isFlipped
        ? "rotateY(180deg)"
        : "rotateY(0deg)";

    setTimeout(() => {
        card.style.transition = "transform 0.15s ease";
    }, 700);

});