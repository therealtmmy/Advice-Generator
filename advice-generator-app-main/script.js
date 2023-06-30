const year = document.getElementById("date");
const button = document.getElementById("play");
const quote = document.getElementById("Advice");
const randomNo = document.getElementById("random-no");

// Fetch API
button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => {
      return data.json();
    })
    .then((completedData) => {
      let array = completedData.slip;
      randomNo.innerText = array.id;
      quote.innerText = array.advice;
    });
});

// Date
let d = new Date();
year.textContent = d.getFullYear();
