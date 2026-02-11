const display = document.getElementById("display");
let resultDisplayed = false;

function clickNum(num) {
  if (resultDisplayed) {
    display.innerHTML = num;
    resultDisplayed = false;
  } else {
    display.innerHTML = display.innerHTML + num;
  }
}

function clickOpp(opp) {
  if (
    display.innerHTML != "" &&
    display.innerHTML[display.innerHTML.length - 2] != "+" &&
    display.innerHTML[display.innerHTML.length - 2] != "-" &&
    display.innerHTML[display.innerHTML.length - 2] != "*" &&
    display.innerHTML[display.innerHTML.length - 2] != "/"
  ) {
    display.innerHTML = display.innerHTML + " " + opp + " ";
  }
  if (resultDisplayed) {
    resultDisplayed = false;
  }
}

function calculate() {
  args = display.innerHTML.split(" ");
  if (args[args.length - 1] == "") {
    args.pop();
    args.pop();
  }
  stack = [];
  display.innerHTML = "";
  for (let i = 0; i < args.length; i++) {
    if (args[i] == "*") {
      stack.push(parseFloat(stack.pop()) * parseFloat(args[i + 1]));
      i++;
      continue;
    } else if (args[i] == "/") {
      if (parseFloat(args[i + 1]) == 0) {
        alert("Divide by 0 error");
        return;
      }
      stack.push(parseFloat(stack.pop()) / parseFloat(args[i + 1]));
      i++;
      continue;
    }
    stack.push(args[i]);
  }
  res = parseFloat(stack[0]);
  for (let i = 1; i < stack.length; i++) {
    if (stack[i] == "+") {
      res += parseFloat(stack[i + 1]);
      i++;
      continue;
    }
    if (stack[i] == "-") {
      res -= parseFloat(stack[i + 1]);
      i++;
      continue;
    }
  }
  display.innerHTML = res;
  resultDisplayed = true;
}
