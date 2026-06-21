const screen = document.querySelector(".calculator input");


const buttons = document.querySelectorAll(".calc-box button");

let justCalculated = false;

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = btn.textContent;

    if (value === "clr") {
      clearAll();
    } else if (value === "DEL") {
      deleteLast();
    } else if (value === "=") {
      calculate();
    } else {
      addToScreen(value);
    }
  });
});


function addToScreen(value) {
  if (justCalculated) {
    screen.value = "";
    justCalculated = false;
  }

  screen.value += value;
}


function clearAll() {
  screen.value = "";
  justCalculated = false;
}


function deleteLast() {
  screen.value = screen.value.slice(0, -1);
}


function calculate() {
  try {
    screen.value = eval(screen.value);
    justCalculated = true;
  } catch (error) {
    screen.value = "Error";
    justCalculated = true;
  }
}