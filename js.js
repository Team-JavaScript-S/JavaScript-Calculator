function number(value) {
    document.calculator.display.value += value;
}
function sin() {
    document.calculator.display.value = Math.sin(document.calculator.display.value);
}
function cos() {
    document.calculator.display.value = Math.cos(document.calculator.display.value);
}
function tan() {
    document.calculator.display.value = Math.tan(document.calculator.display.value);
}
function backSpace() {
    let a = document.calculator.display.value;
    document.calculator.display.value = a.substr(0, a.length - 1);
}
function sqrt() {
    document.calculator.display.value = Math.pow(document.calculator.display.value, 1 / 2);
}
function clearAll(value) {
    document.calculator.display.value = " ";
}
function equal() {
    document.calculator.display.value = eval(document.calculator.display.value);
}
const percentage = document.querySelector("#percent");
// percentage.addEventListener("click", number());