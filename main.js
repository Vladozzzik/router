const arrData = [
  {
    name: "JavaScript",
    info: `<h1>JavaScript is great`,
  },
  {
    name: "Ruby",
    info: `<h1>Ruby is great`,
  },
  {
    name: "PHP",
    info: `<h1>PHP is great`,
  },
];
// create main div
const main = document.createElement("div");
main.classList.add("main");
document.body.appendChild(main);
// create div butttons for buttons display flex
const divButtons = document.createElement("div");
divButtons.classList.add("divButtons");
main.appendChild(divButtons);
// create buttons
arrData.forEach(createButton);
function createButton(value) {
  const btn = document.createElement("button");
  btn.innerHTML = value.name;
  btn.addEventListener("click", function handleClick(event) {
    const tags = document.querySelectorAll("button");
    tags.forEach( tag => {
        tag.classList.remove('yellow');
      });
    content.innerHTML = value.info;
    btn.classList.add('yellow')
    content.classList.add('yellow')
  });
  divButtons.appendChild(btn);
}
// add style body
const body = document.querySelector("body");
body.classList.add("blue");
//create div content
const content = document.createElement("div");
content.innerHTML = "<h1>Hello!</h1>";
content.classList.add("content");
main.appendChild(content);

