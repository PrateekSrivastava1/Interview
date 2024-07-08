//"RGBBBGR", "RGBBGR"

// "RGBBBGR" => "RGBGR"

// "RGBBGR" => ""

function main(str) {
  const stack = [];
  for (let s of str) {
    if (stack.length === 0) stack.push(s);
    else if (stack[stack.length - 1] === s) {
      stack.pop();
    } else {
      stack.push(s);
    }
  }
  return stack.join("");
}

console.log("res: ", main("RGBBBGR"));
console.log("res:", main("RGBBGR"));
