const str = "alpha";
("alphpla");
let i = 0,
  j = str.length - 1;
let res = [];
let stack = [];
while (i <= j) {
  if (str[i] !== str[j]) {
  } else {
    stack.push(str[i]);
  }
  res.push(str[i]);
  i++;
  j--;
}
console.log(res.join(""));
