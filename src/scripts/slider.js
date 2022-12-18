const getById = (id) => document.getElementById(id);

const slidesContainer = getById("slides-container");

const changeSlideByStep = (step) => {
  const currentSlide = slidesContainer.querySelector(".visible");

  let slideToShow;
  if (step === 1) {
    slideToShow =
      currentSlide.nextElementSibling || slidesContainer.firstElementChild;
  } else if (step === -1) {
    slideToShow =
      currentSlide.previousElementSibling || slidesContainer.lastElementChild;
  }

  currentSlide.classList.remove("visible");
  slideToShow.classList.add("visible");
};

next.onclick = () => {
  changeSlideByStep(1);
};

prev.onclick = () => {
  changeSlideByStep(-1);
};
