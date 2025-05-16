const buttons = [...document.getElementsByClassName("button")];

const SCREEN = document.getElementById("screen");

const operadorSum = document.getElementById("operatorSum");
const operadorSus = document.getElementById("operatorSus");
const operadorMul = document.getElementById("operatorMul");
const operadorDiv = document.getElementById("operatorDiv");

const operadorEqual = document.getElementById("equal");

let numbers = buttons.filter((element) => element.textContent >= 0);
// let operadors = buttons.filter((element) => isNaN(element.textContent));
let numberForOperate;
let number2;

document.addEventListener("click", (event) => {
	// let op = operadors.find((element) => element == event.target);

	if (numbers.find((element) => element === event.target)) {
		SCREEN.textContent = SCREEN.textContent + event.target.textContent;
	}

	if (event.target == operadorSum) {
		number2 = SCREEN.textContent;

		SCREEN.textContent = "";
	}

	if (event.target == operadorEqual) {
		numberForOperate = SCREEN.textContent;

		SCREEN.textContent = parseInt(numberForOperate) + parseInt(number2);
	}
});
