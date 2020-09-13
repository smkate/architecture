const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (eventScroll) {
    eventScroll.preventDefault();

    const blockId = anchor.getAttribute("href").substr(1);

    document.getElementById(blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Observe the scrolling
const logoBox = document.querySelector(".logo-box");
const sectionOne = document.querySelector(".banner");
// Observe the scrolling blocks
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
  rootMargin: "-400px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  //   entries.forEach((entry) => {
  //     if (!entry.isIntersecting) {
  //       logoBox.classList.add("scrolled");
  //       document.body.style.backgroundColor = "white";
  //     } else {
  //       logoBox.classList.remove("scrolled");
  //       document.body.style.backgroundColor = "#ccef4a";
  //     }
  //   });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);

// Observe the scrolling blocks
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
