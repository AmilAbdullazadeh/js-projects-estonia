// "https://dog.ceo/api/breeds/image/random";
let container = document.querySelector(".container")

function loadImages(num = 10) {
  let i = 0

  while (i < num) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        let img = document.createElement("img");
        img.src = data.message;
        container.appendChild(img);
      });
    i++
  }
}

loadImages()

window.addEventListener("scroll", () => {
  const { scrollY, innerHeight } = window
  if (scrollY + innerHeight >= document.documentElement.scrollHeight) {
    loadImages()
  }
})