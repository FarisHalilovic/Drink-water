const smallCup = document.querySelectorAll(".cup-small");
const listers = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallCup.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCup[idx].classList.contains("full") &&
    !smallCup[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  smallCup.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCaps = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCup.length;

  if (fullCaps === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCaps / totalCups) * 330}px`;
    percentage.innerText = `${(fullCaps / totalCups) * 100}%`;
  }

  if (fullCaps === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    listers.innerText = `${2 - (250 * fullCaps) / 1000}L`;
  }
}
