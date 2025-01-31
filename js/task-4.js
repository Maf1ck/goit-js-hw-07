const loginForm = document.querySelector(".login-form");
const inputsForm = document.querySelector("input");

const checkInputs = (e) =>{
    e.preventDefault();
   const form = e.target;
   const login = form.elements.email.value;
   const password = form.elements.password.value;

   if(!login || !password){
    alert('All form fields must be filled in');
    return;
   }

   const formInfo={};
   formInfo[form.elements.email.name]=login.trim();
   formInfo[form.elements.password.name]=password.trim();

   form.reset();
   console.log(formInfo);
};

loginForm.addEventListener("submit",checkInputs);
