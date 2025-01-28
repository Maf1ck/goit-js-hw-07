const containerWidget=document.querySelector(".widget");
const spanColor=document.querySelector(".color");
const btnClick=document.querySelector(".change-color");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const changeColor = (e)=>{
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor=newColor;
    spanColor.textContent = newColor;
}
btnClick.addEventListener("click",changeColor);