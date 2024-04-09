// STUDENT VERIFICATION SCRIPT
let form = document.querySelector("#form");
let studentName = document.querySelector("#student");
let password = document.querySelector("#password");
let registeredStudent = ["I0D8J0"];
let btn = document.querySelector("#btn");
let errors = document.querySelectorAll(".error")
form.onsubmit =(eve)=>{
    if (registeredStudent.includes(password.value.trim())){
    }else{
        eve.preventDefault();
        studentName.style.border ="1px groove hsl(354, 100%, 66%)"
        password.style.border ="1px groove hsl(354, 100%, 66%)"
        errors[2].textContent=" Not in our database."; 
    }
if(studentName.value.trim() === ""){
    errors[0].textContent="This field is required";
    studentName.style.border ="1px groove hsl(354, 100%, 66%)"
    eve.preventDefault();
    errors[2].textContent="";
}else{
    errors[0].textContent="";
    studentName.style.border ="1px groove hsl(223, 87%, 63%)"
}
if(password.value.trim() === ""){
    errors[1].textContent="Password is required";
    password.style.border ="1px groove hsl(354, 100%, 66%)"
    errors[2].textContent="";
    eve.preventDefault();
}else{
     password.style.border ="1px groove hsl(223, 87%, 63%)"
}
}
// END

