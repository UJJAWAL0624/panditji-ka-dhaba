const nav=document.getElementById("nav"),bg=document.getElementById("bg"),lb=document.getElementById("lb"),lbi=document.getElementById("lbi");
bg.addEventListener("click",()=>{const o=nav.classList.toggle("open");bg.setAttribute("aria-expanded",o)});
document.addEventListener("click",e=>{const b=e.target.closest("[data-k]");
if(b){lbi.src=b.dataset.k;lbi.alt=b.dataset.a;lb.classList.add("on")}
else if(e.target.closest("#lbx")||e.target===lb)lb.classList.remove("on")});
addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("on")});
