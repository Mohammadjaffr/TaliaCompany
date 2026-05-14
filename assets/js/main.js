
// TALIA Oilfield Services — shared interactions
(function () {
  const onReady = (fn) => {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  };

  onReady(() => {
    const header = document.querySelector("header, nav.sticky");
    if (header) {
      const toggleHeader = () => header.classList.toggle("scrolled", window.scrollY > 50);
      toggleHeader();
      window.addEventListener("scroll", toggleHeader, { passive: true });
    }

    const revealSelectors = ".reveal, .reveal-hidden, .reveal-up, .reveal-on-scroll";
    const revealItems = document.querySelectorAll(revealSelectors);
    if ("IntersectionObserver" in window && revealItems.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active", "reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -80px 0px" });
      revealItems.forEach((item) => observer.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("active", "reveal-visible"));
    }
  });
})();
