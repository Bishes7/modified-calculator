allButtons = document.querySelectorAll(".btn");

const operators = ["%", "-", "+", "/", "*"];

let lastOperator = "";

let strDisplay = "";
const displayArea = document.querySelector(".display");

allButtons.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.scale = "0.7";
  });

  btn.addEventListener("click", () => {
    btn.style.scale = "1";
    const value = btn.innerText;

    // make the ac button work
    if (value === "AC") {
      strDisplay = "";
      return display(strDisplay);
    }

    // make c button work
    if (value === "C") {
      strDisplay = strDisplay.slice(0, -1);
      return display(strDisplay);
    }

    // Make = button work
    if (value === "=") {
      lastOperator = "";
      const lastChar = strDisplay[strDisplay.length - 1];

      if (operators.includes(lastChar)) {
        strDisplay = strDisplay.slice(0, -1);
      }

      return displayTotal();
    }

    // make only one operator at a time

    if (operators.includes(value)) {
      lastOperator = value;
      const lastChar = strDisplay[strDisplay.length - 1];

      if (operators.includes(lastChar)) {
        strDisplay = strDisplay.slice(0, -1);
      }
    }

    // allow only one dot for the programme
    if (value === ".") {
      const lastoperatorIndex = strDisplay.lastIndexOf(lastOperator);

      const lastNumberSet = strDisplay.slice(lastoperatorIndex);

      if (lastNumberSet.includes(".")) {
        return;
      }

      if (!lastOperator && strDisplay.includes(".")) {
        return;
      }
    }

    strDisplay = strDisplay + value;

    display(strDisplay);
  });
});

const display = (str) => {
  displayArea.innerText = str;
};

const displayTotal = () => {
  const total = eval(strDisplay);
  console.log(total);
  strDisplay = total.toString();

  display(strDisplay);
};
