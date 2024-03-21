// STUDENT VERIFICATION SCRIPT
let form = document.querySelector("#form");
let firstName = document.querySelector("#firstname");
let surName = document.querySelector("#surname");
let registeredStudent = ["JERRY ID"];
let btn = document.querySelector("#btn");
let errors = document.querySelectorAll(".error")
form.onsubmit =(eve)=>{
    if (registeredStudent.includes(firstName.value.trim() + " " +  surName.value.trim())){
    }else{
        eve.preventDefault();
        firstName.style.border ="1px groove hsl(354, 100%, 66%)"
        surName.style.border ="1px groove hsl(354, 100%, 66%)"
        errors[2].textContent="This name is not in our database."; 
    }
if(firstName.value.trim() === ""){
    errors[0].textContent="This field is required";
    firstName.style.border ="1px groove hsl(354, 100%, 66%)"
    eve.preventDefault();
    errors[2].textContent="";
}else{
    errors[0].textContent="";
    firstName.style.border ="1px groove hsl(223, 87%, 63%)"
}
if(surName.value.trim() === ""){
    errors[1].textContent="This field is required";
    surName.style.border ="1px groove hsl(354, 100%, 66%)"
    errors[2].textContent="";
    eve.preventDefault();
}else{
     surName.style.border ="1px groove hsl(223, 87%, 63%)"
}
}
// END