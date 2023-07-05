// prevent the default  scroll
// document.addEventListener("scroll", function (event) {
//   event.preventDefault();
// });

// for animate text
var typed = new Typed("#auto-type", {
  strings: ["Javascript ?", "Web Development ?", "Mern Stack ?"],
  typeSpeed: 120,
  backSpeed: 120,
  loop: true,
});

// animate number
const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    const initialNum = parseInt(curElem.innerText);

    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber);
    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber} +`;
      setTimeout(updateNumber, 12);
    }
  };

  updateNumber();
});

var typed = new Typed("#auto-typing", {
  strings: ["#instagram", "#telegram", "#youtube"],
  typeSpeed: 120,
  backSpeed: 120,
  loop: true,
});

// for slider
// const slides = document.querySelectorAll(".animate-first");
// console.log(slides);
// slides.forEach((animateFirst, index) => {
//   animateFirst.computedStyleMap.left = `${index * 100}`;
// });
