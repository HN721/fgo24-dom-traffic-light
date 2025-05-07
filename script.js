const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

let current = "red";

function switchLight() {
  red.classList.remove("active");
  yellow.classList.remove("active");
  green.classList.remove("active");
  if (current === "red") {
    red.classList.add("active");
    current = "yellow";
    setTimeout(switchLight, 3000);
  } else if (current === "yellow") {
    yellow.classList.add("active");
    current = "green";
    setTimeout(switchLight, 2000);
  } else if (current === "green") {
    green.classList.add("active");
    current = "red";
    setTimeout(switchLight, 3000);
  }
}

switchLight();
