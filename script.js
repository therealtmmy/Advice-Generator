const year = document.getElementById("date");
const button = document.getElementById("play");
const quote = document.getElementById("Bible-Quote");

const bookName = document.getElementById("bookname");
const chapter = document.getElementById("Chapter");
const verse = document.getElementById("Verse");

// Light and Day
const bodyPage = document.querySelector("body");
const hero = document.getElementById("card");
const nightTime = document.getElementById("night");
// const dayTime = document.getElementById("day");

// Tracking of web visitation
const visit = document.getElementById("website-counter");
let visitCount = localStorage.getItem("page_view");
// Check if page_view entry is present
// if (visitCount) {
//   visitCount = Number(visitCount) + 1;
//   localStorage.setItem("page_view", visitCount);
// } else {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
// }

// visit.innerText = visitCount;

let showOn = true;

nightTime.addEventListener("click", () => {
  if (showOn) {
    bodyPage.style.setProperty("background", "hsl(232, 19%, 15%)");
    hero.style.setProperty("background", "hsl(228, 28%, 20%)");
    quote.style.setProperty("color", "hsl(0, 0%, 100%)");
    nightTime.style.setProperty("background", "hsl(228, 28%, 20%)");
    nightTime.style.setProperty("color", "white");
    nightTime.innerText = "Day";
    showOn = !showOn;
  } else {
    bodyPage.style.setProperty("background", "white");
    hero.style.setProperty("background", "hsl(227, 47%, 96%)");
    quote.style.setProperty("color", "hsl(230, 17%, 14%)");
    nightTime.innerText = "Night";
    nightTime.style.setProperty("background", "hsl(227, 47%, 96%)");
    nightTime.style.setProperty("color", "black");
    showOn = !showOn;
  }
});

// dayTime.addEventListener("click", () => {
//   bodyPage.style.setProperty("background", "white");
//   hero.style.setProperty("background", "hsl(227, 47%, 96%)");
//   quote.style.setProperty("color", "hsl(230, 17%, 14%)");
// });

// Fetch API
button.addEventListener("click", () => {
  fetch("https://labs.bible.org/api/?passage=random&type=json")
    .then((data) => {
      return data.json();
    })
    .then((completedData) => {
      let array = completedData;
      bookName.innerText = array[0].bookname;
      chapter.innerText = array[0].chapter;
      verse.innerText = array[0].verse;
      quote.innerText = array[0].text;
    });
});

// Date;
// let d = new Date();
// year.innerText = d.getFullYear();
