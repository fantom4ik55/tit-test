(()=>{"use strict";let e=0;const t=document.querySelectorAll(".main__box"),c=t.length;function n(e){const c=-305*e;t.forEach((e=>{e.style.transform=`translateX(${c}px)`}))}document.querySelector(".main__button--next").addEventListener("click",(()=>{e=(e+1)%c,n(e)})),document.querySelector(".main__button--prev").addEventListener("click",(()=>{e=(e-1+c)%c,n(e)})),n(e);const s=document.getElementById("burger-icon"),i=document.getElementById("menu"),a=document.getElementById("close-btn"),l=document.getElementById("overlay");s.addEventListener("click",(()=>{i.classList.add("active"),l.classList.add("active")})),a.addEventListener("click",(()=>{i.classList.remove("active"),l.classList.remove("active")})),l.addEventListener("click",(()=>{i.classList.remove("active"),l.classList.remove("active")}))})();