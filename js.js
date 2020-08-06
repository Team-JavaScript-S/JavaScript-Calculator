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
function equal() {if ((document.calculator.display.value ).indexOf("^") > -1) {
    var base = (document.calculator.display.value ).slice(0, (document.calculator.display.value ).indexOf("^"));
    var exponent = (document.calculator.display.value ).slice((document.calculator.display.value ).indexOf("^") + 1);
   document.calculator.display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    document.calculator.display.value = eval(document.calculator.display.value )
    syntaxError()
  }
}

function syntaxError() {
    if (eval(document.calculator.display.value) == SyntaxError ||
        eval(document.calculator.display.value) == ReferenceError ||
        eval(document.calculator.display.value) == TypeError) {
        document.calculator.display.value == "SyntaxError";
    }
} 
function fac() {
  var number = 1;
  if (document.calculator.display.value === 0) {
    document.calculator.display.value = "1";
  } else if (document.calculator.display.value < 0) {
    document.calculator.display.value = "undefined";
  } else {
    var number = 1;
    for (var i = document.calculator.display.value; i > 0; i--) {
      number *=  i;
    }
    document.calculator.display.value = number;
  }
}
function pi() {
  document.calculator.display.value = (document.calculator.display.value * Math.PI);
}
function percentage() {
  display.value = display.value / 100;
}
function iN() {
  display.value = Math.log(display.value);
}
function radians() {
  display.value = display.value * (Math.PI / 180);
}
function expo() {
  display.value = Math.exp(display.value);
}
function powerOf() {
  display.value += "^";
}