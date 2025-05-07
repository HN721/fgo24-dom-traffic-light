const light = {
  red: document.querySelector(".red"),
  yellow: document.querySelector(".yellow"),
  green: document.querySelector(".green"),
};
let current = "red";

function switchLight() {
  Object.values(light).forEach((light) => light.classList.remove("active"));
  if (current === "red") {
    light.red.classList.add("active");
    current = "yellow";
    setTimeout(switchLight, 3000);
  } else if (current === "yellow") {
    light.yellow.classList.add("active");
    current = "green";
    setTimeout(switchLight, 2000);
  } else if (current === "green") {
    light.green.classList.add("active");
    current = "red";
    setTimeout(switchLight, 3000);
  }
}

switchLight();
