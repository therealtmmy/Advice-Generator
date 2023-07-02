const year = document.getElementById("date");
const button = document.getElementById("play");
const quote = document.getElementById("Bible-Quote");

const bookName = document.getElementById("bookname");
const chapter = document.getElementById("Chapter");
const verse = document.getElementById("Verse");

// Fetch API
button.addEventListener("click", () => {
  fetch("https://labs.bible.org/api/?passage=random&type=json")
    .then((data) => {
      return data.json();
    })
    .then((completedData) => {
      let array = completedData;
      console.log(array);
      bookName.innerText = array[0].bookname;
      chapter.innerText = array[0].chapter;
      verse.innerText = array[0].verse;
      quote.innerText = array[0].text;
    });
});

Date;
let d = new Date();
year.textContent = d.getFullYear();
