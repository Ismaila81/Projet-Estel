// selecteurs : document.querySelector
// const Titre = document.querySelector("h4");
// click event
 const DivContainer = document.querySelector(".click-event");
 const btn1 = document.querySelector('#btn-1');
 const btn2 = document.getElementById('btn-2');
 const reponse = document.querySelector("p");

 DivContainer.addEventListener("click", () => {
    //  console.log("click");
    // DivContainer.style.background="red";
    DivContainer.classList.toggle("DivCont");
 });
 btn1.addEventListener("click", () =>{
reponse.style.visibility="Visible";
reponse.style.background="red";
 });

 btn2.addEventListener("click", () =>{
    reponse.style.visibility="Visible";
    reponse.style.background='green';
     });
 //------------------
 // keypress
 /*const keypressContainer = document.querySelector('.keypress');
 const key = document.getElementById("key");

 document.addEventListener("keypress", (e) =>{
    key.textContent= e.key;
    ring();
 });*/
 // nav
 // scrol event
 const nav = document.querySelector("nav");
 window.addEventListener('scroll', () => {
     if (window.scrollY > 120){
         nav.style.top = 0;
     }else{
         nav.style.top = '-50px';
     }
 });
 //========================='
 const inputName=document.querySelector('input[type=text]');
 const select = document.querySelector("select");
 const form=document.querySelector("form");
 let pseudo="";
 let language="";
 inputName.addEventListener('input',(e)=>{
     pseudo=e.target.value;
     //console.log(pseudo);
 });
 select.addEventListener("input", (e) =>{
     language =e.target.value;
 });
 form.addEventListener('submit',(e)=>{
     e.preventDefault();
     if (cgv.checked){
         // affiche des variables
     }else{ alert('Veuillez accepter nos conditions.')

     }
 });