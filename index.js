
// || HOME PAGE SCRIPT
let menu = document.querySelector("#menu");
let newImg=  "./img/icon-close.svg";
let nav = document.querySelector("nav");
let close = document.querySelector("#close");
let oLevel = document.querySelector("#level");
let subNavs = document.querySelectorAll(".nav__sub");
let smallNavs = document.querySelectorAll(".nav__small");
let book = document.querySelector("#book");
let subjects = document.querySelector("#subjects");
let hundredLevel = document.querySelector("#hundred");
let firstSemester = document.querySelector("#first");
let secondSemester = document.querySelector("#second");
let subNavs1 = document.querySelectorAll(".nav__sub1");
let smallNavs1 = document.querySelectorAll(".nav__small1");
let smallNavs2 = document.querySelectorAll(".nav__small2");

function changeImgHidden(){
    nav.style.visibility="hidden";
    close.style.visibility="hidden";
    menu.style.visibility="visible";
}
function changeImg(){
    nav.style.visibility="visible";
    menu.style.visibility="hidden";
    close.style.visibility="visible";
}
menu.onclick=(eve)=>{
    eve.target;
 changeImg();
    
}

close.onclick=(eve)=>{
    eve.target;
    changeImgHidden();
    
}
oLevel.onclick=(eve)=>{
    eve.target;
    
    subNavs.forEach(sub => {
        sub.style.display="block";
    });
    oLevel.onclick=(eve)=>{
        eve.target;
    subNavs.forEach(sub => {
        sub.classList.toggle("header__ol");
    });
    subjects.classList.toggle("header");
    smallNavs.forEach(small => {
        small.classList.toggle("header__sub");
    });
}    
}
book.onclick=(eve)=>{
    eve.target;
    subjects.style.display="block";
    book.onclick=(eve)=>{
        eve.target;
    subjects.classList.toggle("header");
    smallNavs.forEach(small => {
        small.classList.toggle("header__sub");   
    });  
}   
}
subjects.onclick=(eve)=>{
    eve.target;
    smallNavs.forEach(small => {
        small.style.display="block";
    
    });
    subjects.onclick=(eve)=>{
        eve.target;
    smallNavs.forEach(smallNavs => {
        smallNavs.classList.toggle("header__sub");  
    });
}
}

hundredLevel.onclick=(eve)=>{
    eve.target;
    subNavs1.forEach(subNavs1 => {
        subNavs1.style.display="block";
        
    });
    hundredLevel.onclick=(eve)=>{
        eve.target;
    subNavs1.forEach(subNavs1 => {
        subNavs1.classList.toggle("header__hundred");  
    });
    smallNavs1.forEach(smallNavs1 => {
        smallNavs1.classList.toggle("header__hun");  
    });
    smallNavs2.forEach(smallNavs2 => {
        smallNavs2.classList.toggle("header__huns");  
    });
}   
}

firstSemester.onclick=(eve)=>{
    eve.target;
    smallNavs1.forEach(smallNavs1 => {
        smallNavs1.style.display="block";
        
    });
    firstSemester.onclick=(eve)=>{
        eve.target;
        smallNavs1.forEach(smallNavs1 => {
            smallNavs1.classList.toggle("header__sem");  
        });
}
    
}

secondSemester.onclick=(eve)=>{
    eve.target;
    smallNavs2.forEach(smallNavs2 => {
        smallNavs2.style.display="block";
        
    });
    secondSemester.onclick=(eve)=>{
        eve.target;
        smallNavs2.forEach(smallNavs2 => {
            smallNavs2.classList.toggle("header__sem");  
        });
}    
}
// let reload = window.matchMedia("(min-width: 768px)")

// if(reload.matches){
//     location.reload();
//     change.style.textContent="ebi"
//         }else{
//             location.reLoad();
//         }    

