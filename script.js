const words=["smart software.","AI solutions.","web experiences.","real projects."];let wi=0,ci=0,del=false;
function type(){const el=document.getElementById("typing");if(!el)return;const w=words[wi];el.textContent=del?w.substring(0,ci--):w.substring(0,ci++);if(!del&&ci>w.length){del=true;setTimeout(type,1100);return}if(del&&ci<0){del=false;wi=(wi+1)%words.length;ci=0}setTimeout(type,del?45:75)} type();
document.getElementById("year").textContent=new Date().getFullYear();
const themeBtn=document.getElementById("themeBtn");themeBtn.addEventListener("click",()=>{document.body.classList.toggle("light");themeBtn.innerHTML=document.body.classList.contains("light")?'<i class="bi bi-sun"></i>':'<i class="bi bi-moon-stars"></i>';localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark")});
if(localStorage.getItem("theme")==="light"){document.body.classList.add("light");themeBtn.innerHTML='<i class="bi bi-sun"></i>'}
const topBtn=document.getElementById("topBtn");window.addEventListener("scroll",()=>topBtn.classList.toggle("show",scrollY>500));topBtn.onclick=()=>scrollTo({top:0,behavior:"smooth"});
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("formMsg").textContent="Message form ready — connect this form to your email service or backend.";});
