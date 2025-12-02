    const track = document.querySelector(".ticker-track");

    const children = Array.from(track.children);
    children.forEach((child) => {
    track.appendChild(child.cloneNode(true));
});

    let x = 0;
    let animating = false;
    let started = false;

    function animate() {
    if (!animating) return;

    x -= 1;
    if (x <= -track.scrollWidth / 2) x = 0;
    track.style.transform = `translateX(${x}px)`;

    requestAnimationFrame(animate);
}

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !started) {
                    started = true;

                    setTimeout(() => {
                        animating = true;
                        animate();
                    }, 500);
                }
            });
        },
        { threshold: 0.2 }
    );

    observer.observe(track);
