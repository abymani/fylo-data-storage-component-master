

const slider = document.getElementById("slider");
const storageUsed = document.querySelector(".storage-used");
const storageLeft = document.querySelector(".gb-left");


slider.oninput = function (){
    let value = this.value;
    let color = `linear-gradient(90deg,hsl(6, 100%, 80%) 0% ,hsl(335, 100%, 65%) ${value/10}% , hsl(229, 57%, 11%) ${value/10}%, hsl(229, 57%, 11%) 100%)`;
    this.style.background = color;
    storageUsed.innerHTML = value + " GB";
    storageLeft.innerHTML = 1000 - value ;
}
