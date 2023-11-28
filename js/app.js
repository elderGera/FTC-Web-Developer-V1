let hamContainer = document.querySelector('.ham-container');
let navUl = document.querySelector('.header-nav');
let indexH1 = document.querySelector('.header-nav-h1');
let brochure = document.querySelector('.index-download-brochure');

hamContainer.addEventListener('click', () => {
  navUl.classList.toggle('ham-active');
  indexH1.classList.toggle('hide-h1');
  brochure ? brochure.classList.toggle('hide-brochure') : '';

  //Disabling the scrollbar when the ham is active.
  document.body.style.overflow =
    document.body.style.overflow == 'hidden' ? 'visible' : 'hidden';
});

/** About course accordion starts here */
let dropdownDiv = document.querySelectorAll('.about-dropdown');
let question = document.querySelectorAll('.about-h3-question');
console.log(question);

let span = document.querySelectorAll('.about-h3-span');
let faqDiv = document.querySelectorAll('.about-div-answer');

let dropdownArray = Array.prototype.slice.call(dropdownDiv);
let questionArray = Array.prototype.slice.call(question);

let spanArray = Array.prototype.slice.call(span);
let faqDivArray = Array.prototype.slice.call(faqDiv);

questionArray.forEach((e, i) => {
  e.addEventListener('click', () => {
    console.log('hi');
    dropdownArray[i].classList.toggle('about-dropdown-dropped');
    spanArray[i].classList.toggle('about-minus');
    faqDivArray[i].classList.toggle('about-div-active');
  });
});

// Progress Bar Certifications page
const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach((progressBar) => {
  const percent = progressBar.querySelector('.percentage');
  const fill = progressBar.querySelector('.progress-bar-fill');
  fill.style.width = percent.innerHTML;
  const left = parseInt(percent.innerHTML) / 2;
  percent.style.left = `${left}%`;
});
