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
const dayTime = document.getElementById("day");

nightTime.addEventListener("click", () => {
  bodyPage.style.setProperty("background", "hsl(232, 19%, 15%)");
  hero.style.setProperty("background", "hsl(228, 28%, 20%)");
  quote.style.setProperty("color", "hsl(0, 0%, 100%)");
});

dayTime.addEventListener("click", () => {
  bodyPage.style.setProperty("background", "white");
  hero.style.setProperty("background", "hsl(227, 47%, 96%)");
  quote.style.setProperty("color", "hsl(230, 17%, 14%)");
});

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
