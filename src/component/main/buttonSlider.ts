let count = 0;

function transform() {
  const containerSlider = document.getElementById("sectionSlider");
  const slide = containerSlider.getElementsByClassName("dipA1");
  const firstSlide = slide[0] as HTMLElement;
  const slideWidth = firstSlide.offsetWidth;
  const result = -count * slideWidth;
  containerSlider.style.transform = `translateX(${result}px)`;
}

function sliderLeft() {
  // const buttonLeft = document.getElementById('buttonLeft');
  console.log(count);
  if (count > 0) {
    count -= 1;
    transform();
  }
}

function sliderRight() {
  // const buttonLeft = document.getElementById('buttonRight');
  console.log(count);
  if (count <= 1) {
    count += 1;
    transform();
  }
}

export { sliderLeft, sliderRight };
