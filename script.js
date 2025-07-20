const englishBar = document.querySelector(".english-bar");
const danishBar = document.querySelector(".danish-bar");
const turkishBar = document.querySelector(".turkish-bar");

const engLoading = document.getElementById("english-load");
const danLoading = document.getElementById("danish-load");
const turLoading = document.getElementById("turkish-load");
window.addEventListener("DOMContentLoaded", () => {
  const languageBars = [
    { id: "english", name: "English", percent: 50 },
    { id: "danish", name: "Danish", percent: 50 },
    { id: "turkish", name: "Turkish", percent: 80 },
  ];

  languageBars.forEach((lang) => {
    const bar = document.querySelector(`.${lang.id}-bar`);
    const level = document.querySelector(`.${lang.id}-level`);
    const loadingText = document.getElementById(`${lang.id}-load`);

    if (!bar || !level || !loadingText) return;

    function startLoad() {
      level.style.backgroundColor = "#00ddfa";
      level.style.width = `${lang.percent}%`;
      loadingText.innerHTML = "Loading...";
    }

    function resetLoad() {
      level.style.backgroundColor = "";
      level.style.width = "0%";
      loadingText.innerHTML = "";
    }

    // Mouse events
    bar.addEventListener("mouseenter", startLoad);
    bar.addEventListener("mouseleave", resetLoad);

    // Touch events
    bar.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault(); // Optional: prevent scroll
        startLoad();
      },
      { passive: false }
    );

    bar.addEventListener("touchend", resetLoad);
    bar.addEventListener("touchcancel", resetLoad);
  });
});

// Handling just PersianBar function
window.addEventListener("DOMContentLoaded", function () {
  const persianBar = document.querySelector(".persian-bar");
  const level = document.querySelector(".persian-level");
  const persloading = document.getElementById("persian-load");

  let isTouched = false;

  function startAnimation() {
    isTouched = true;
    level.style.backgroundColor = "#00ddfa";
    level.style.width = "100%";
    persloading.innerHTML = "Loading...";

    level.addEventListener("transitionend", function onTransitionEnd(element) {
      if (element.propertyName === "width" && isTouched) {
        persloading.innerHTML = "Succesfully Loaded";
      }
      level.removeEventListener("transitionend", onTransitionEnd);
    });
  }

  function resetAnimation() {
    isTouched = false;
    level.style.backgroundColor = "";
    level.style.width = "0%";
    persloading.innerHTML = "";
  }

  // Mouse support
  persianBar.addEventListener("mouseenter", startAnimation);
  persianBar.addEventListener("mouseleave", resetAnimation);

  // Touch support
  persianBar.addEventListener("touchstart", startAnimation);
  persianBar.addEventListener("touchend", resetAnimation);
  persianBar.addEventListener("touchcancel", resetAnimation);
});
