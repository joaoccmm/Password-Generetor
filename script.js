let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
 
let valuElement = document.querySelector("#valor");
let passwordElement = document.querySelector("#password");

let containerElement = document.querySelector("#container-password");

let sets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ1234567890";
let newPassword = "";

valuElement.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
  valuElement.innerHTML = this.value;
}

function generatePassword(){
  alert("Vamos gerar a senha")
}