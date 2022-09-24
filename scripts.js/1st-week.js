function allMyFunctions(){
    lastUpdated(); 
    year(); 
} 

function year() {
    let d = new Date();
    let b = d.getFullYear();
    document.getElementById("currentyear").innerHTML = b;
}

function lastUpdated() {
    let a = document.lastModified;
    document.getElementById("lastmodified").innerHTML = a;
}