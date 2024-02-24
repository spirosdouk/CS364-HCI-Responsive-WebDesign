function animateElements() {
  const elements = document.querySelectorAll(
    ".feature-section .animate-from-above"
  );

  elements.forEach((el) => {
    el.classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", animateElements);
//scroll
document.addEventListener("DOMContentLoaded", function () {
  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  const scrollIndicator = document.querySelector(
    ".scroll-indicator.animate-from-above"
  );
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", scrollToBottom);
  }
});
//brands
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".logos .pict");

  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 1}s`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var diskosImage = document.getElementById("diskos-image");
  var diskos = document.getElementById("diskos");
  var diskosWidth = diskos.offsetWidth;
  var imageWidth = diskosImage.offsetWidth;
  var position = 0;
  var speed = 2;
  var direction = speed;

  function animate() {
    position += direction;
    if (position > diskosWidth - imageWidth || position < 0) {
      direction *= -1;
    }
    diskosImage.style.left = position + "px";

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
requestAnimationFrame(animate);
