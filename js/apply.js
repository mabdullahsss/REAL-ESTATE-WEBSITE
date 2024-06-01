//
//
let nums = document.querySelectorAll("section.apply .item span");
let section = document.querySelector("section.apply");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = 0;
  let count = setInterval(() => {
    counter += 2;
    el.innerHTML = counter;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
