// Carousel script
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel-container");
  const pages = document.querySelectorAll('[id^="carousel-page-"]');
  const indicators = document.querySelectorAll('[id^="carousel-index-"]');
  const threshold = 500; // Margine di tolleranza in pixel

  console.log("Pages:", pages);
  console.log("Indicators:", indicators);

  function handleScroll() {
    console.log("Scroll event triggered");
    let foundVisiblePage = false;

    pages.forEach((page, index) => {
      if (foundVisiblePage) return;

      const rect = page.getBoundingClientRect();
      const isVisible =
        rect.left >= -threshold &&
        rect.right <=
        (window.innerWidth || document.documentElement.clientWidth) +
        threshold;

      console.log(`Page ${index} is visible:`, isVisible);

      if (isVisible) {
        indicators.forEach((indicator) => {
          indicator.classList.remove("w-5");
          indicator.classList.remove("bg-white");
          indicator.classList.add("w-1");
          indicator.classList.add("bg-white/50");
        });
        indicators[index].classList.add("w-5");
        indicators[index].classList.add("bg-white");
        indicators[index].classList.remove("w-1");
        indicators[index].classList.remove("bg-white/50");
        foundVisiblePage = true;
      }
    });
  }

  carousel.addEventListener("scroll", handleScroll);
});

//Logo animation
document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll("#title");

  function handleLogoHover(event) {
    const parent = event.target.parentNode;
    const logo = parent.querySelector("#logo");
    if (logo) {
      logo.classList.add("animate-bounce");
    }
  }

  titles.forEach(title => {
    title.addEventListener("mouseover", handleLogoHover);
  });

  function handleLogoLeave(event) {
    const parent = event.target.parentNode;
    const logo = parent.querySelector("#logo");

    logo.classList.remove("animate-bounce");
  }

  titles.forEach(title => {
    title.addEventListener("mouseleave", handleLogoLeave);
  });
});

//Daily quote
document.addEventListener("DOMContentLoaded", function () {
  const dailyQuote = document.getElementById("daily-quote");
  const today = new Date().getDay() || 7;
  const quotes = [
    "Buon Lunedì!",
    "Buon Martedì!",
    "Buon Mercoledì!",
    "Buon Giovedì!",
    "Buon Venerdì!",
    "Buon Sabato!",
    "Buona Domenica!",

    "Sii la persona che vorresti incontrare."
  ];

  // Generate a random number between 0 and 99
  const randomNum = Math.floor(Math.random() * 100);

  // Check if the random number is less than or equal to 20
  if (randomNum <= 25) {
    dailyQuote.innerText = quotes[7];
  } else {
    dailyQuote.innerText = quotes[today - 1];
  }
});