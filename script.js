document.addEventListener("DOMContentLoaded",function(){

const form=document.getElementById("loginForm");
const email=document.getElementById("email");
const password=document.getElementById("password");
const message=document.getElementById("message");

form.addEventListener("submit",function(e){

e.preventDefault();

let emailValue=email.value.trim();
let passwordValue=password.value.trim();

if(emailValue===""||passwordValue===""){
message.textContent="Please fill all fields";
message.style.color="#f87171";
return;
}

if(!validateEmail(emailValue)){
message.textContent="Enter a valid email address";
message.style.color="#f87171";
return;
}

message.textContent="Login successful";
message.style.color="#4ade80";

});

function validateEmail(email){

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return pattern.test(email);

}

});