console.log("Dziala!");

const grades = {
  celujący: 6,
  "bardzo dobry": 5,
  dobry: 4,
  dostateczny: 3,
  dopuszczający: 2,
  niedostateczny: 1,
};

function createWelcomeElement() {
  // TODO: element with button to count average
}

function renderWelcome() {
  // TODO: render element created by createWelcomeElementFunction after switching to "Podsumowanie Tab"
}

const filterYearGrade = (el) =>
  el.firstElementChild.textContent === "Ocena roczna";

const extractTextGrade = (el) =>
  el.nextElementSibling.firstElementChild.lastElementChild.textContent.trim();

const convertToNumericGrade = (textGrade) =>
  textGrade in grades ? grades[textGrade] : null;

function extractGrades() {
  const grades = Array.from(document.querySelectorAll(".x-label-el"))
    .filter(filterYearGrade)
    .map(extractTextGrade)
    .map(convertToNumericGrade)
    .filter((grade) => grade !== null);
  return grades;
}

function avg(arr) {
  return arr.reduce((prev, curr) => (prev += curr), 0) / arr.length;
}

function renderAverage(averageElement) {
  const tabBar = document.querySelector("#ext-element-174");
  tabBar.insertAdjacentElement("afterend", averageElement);
}

function createAverageElement(average) {
  const container = document.createElement("div");
  const heading1 = document.createElement("h1");
  heading1.textContent = average;
  container.appendChild(heading1);

  return container;
}

addEventListener("click", () => {
  if (!document.querySelector("#ext-tab-5").classList.contains("x-active"))
    return;
  if (document.querySelectorAll(".x-label-el") === null) return;

  const grades = extractGrades();
  if (grades.length === 0) return;
  const average = avg(grades).toFixed(2);
  const averageElement = createAverageElement(average);
  renderAverage(averageElement);
});
