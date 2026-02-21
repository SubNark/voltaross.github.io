// MOBILE MENU TOGGLE
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const spans = hamburger.querySelectorAll("span");
    spans[0].style.transform = navLinks.classList.contains("active")
      ? "rotate(45deg) translate(5px, 5px)"
      : "none";
    spans[1].style.opacity = navLinks.classList.contains("active") ? "0" : "1";
    spans[2].style.transform = navLinks.classList.contains("active")
      ? "rotate(-45deg) translate(5px, -5px)"
      : "none";
  });
}

// CUSTOM CURSOR
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
if (!isMobile) {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    window.requestAnimationFrame(() => {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    });
  });

  const interactives = document.querySelectorAll(
    "a, button, .portfolio-item, input, select, textarea, .hamburger",
  );
  interactives.forEach((el) => {
    el.addEventListener("mouseenter", () =>
      cursor.classList.add("cursor-grow"),
    );
    el.addEventListener("mouseleave", () =>
      cursor.classList.remove("cursor-grow"),
    );
  });
}
