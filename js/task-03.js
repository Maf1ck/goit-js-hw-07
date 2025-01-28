const inputName=document.getElementById("name-input");
const nameOutput=document.getElementById("name-output");

const changeText = (e) =>{
    const contentInput = inputName.value.trim();
    if (contentInput){
        nameOutput.textContent=contentInput;
    }else{
        nameOutput.textContent='Anonymous';
    }
}
inputName.addEventListener('input',changeText);