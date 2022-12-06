






function modified(){
    let d = new Date();
    let year = d.getFullYear();
   
  document.querySelector('#year').textContent = year;
  document.getElementById('modified').innerHTML = "Last Updated: "+(document.lastModified);
}



function toggleMenu(){
//console.log("It Worked!");
document.getElementById("primaryNav").classList.toggle("open");
document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

let currentDay = new Date();
let dayOfWeek = currentDay.getDay();
let message;
if (( dayOfWeek == 1 ) ||( dayOfWeek == 2)) {
  message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."; 
  document.querySelector('#banner').textContent = message;
}
else {
  document.querySelector("#banner").classList.remove("bannerDisplay");
}
