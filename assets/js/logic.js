let answers = document.querySelectorAll(".chioces");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("choices")) {
      event.classList.remove("choices");
    } else {
      event.classList.add("choices");
    }
  });
});