const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll("ul li").forEach((item) => {
  observer.observe(item);
});

const box = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".box").forEach((item) => {
  observer.observe(item);
});
