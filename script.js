//Javascript to call AWS API

//Website counter
var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");
var resetButton = document.querySelector("#reset");

if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

//Reset button (for testing)
resetButton.addEventListener("click", () => {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
    counterContainer.innerHTML = visitCount;
})