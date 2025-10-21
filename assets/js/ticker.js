const track = document.querySelector(".ticker-track");

const children = Array.from(track.children);
children.forEach((child) => {
  track.appendChild(child.cloneNode(true));
});

let x = 0;

function animate() {
  x -= 1;
  if (x <= -track.scrollWidth / 2) x = 0;
  track.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animate);
}

animate();
