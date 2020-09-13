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

// Mobile menu
const burgerMenu = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".nav li");

const openMenu = () => {
  burgerMenu.addEventListener("click", (event) => {
    menu.classList.toggle("collapse");
  });

  for (let link of navLinks) {
    link.addEventListener("click", () => {
      menu.classList.toggle("collapse");
    });
  }
};

openMenu();

// Animate a numbers
// const counters = document.querySelectorAll(".counter");
// const speed = 4000;

// const numbersSection = document.querySelector(".facts");
// const sectionNumberOptions = {
//   rootMargin: "5px 0px 0px 0px",
// };

// const sectionNumbersObserver = new IntersectionObserver(function (
//   entries,
//   sectionNumbersObserver
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       counters.forEach((counter) => {
//         const updateCount = () => {
//           const target = +counter.getAttribute("data-target");
//           const count = +counter.innerText;

//           const inc = target / speed;

//           if (count < target) {
//             counter.innerText = Math.ceil(count + inc);
//             setTimeout(updateCount, 1);
//           } else {
//             count.innerText = target;
//           }
//         };

//         updateCount();
//       });
//     }
//   });
// },
// sectionNumberOptions);
// sectionNumbersObserver.observe(numbersSection);

// Observe the scrolling
const goTop = document.querySelector(".go-top");
const sectionOne = document.querySelector(".main");
// Observe the scrolling blocks
const faders = document.querySelectorAll(".fade-in");

const sectionOneOptions = {
  rootMargin: "0px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      goTop.classList.add("fade-top");
    } else {
      goTop.classList.remove("fade-top");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);

// Observe the scrolling blocks
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
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

// Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".item");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
