// You can add more quotes dynamically here if needed.
const quotes = [
  "“And We created you in pairs.” — [Surah An-Naba 78:8]",
  "“Marriage is part of my sunnah.” — [Ibn Majah: 1846]",
  "“When a man marries, he has fulfilled half of the religion.” — [Bayhaqi]"
];

// Scroll animation effect (on scroll fade-in)
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
