let container = document.querySelector(".container");
let timeNow = new Date().getHours();
let greeting =
  timeNow >= 3 && timeNow < 12 
    ? "Good Morning" 
    : timeNow >= 12 && timeNow < 16
    ? "Good Afternoon"
    :timeNow >=16 && timeNow < 20
    ? "Good evening"
    : "good night";
container.innerHTML = `<h1>${greeting}</h1>`;

