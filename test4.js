const arr = [1, 9, 12, 14, 16];
const arr2 = [6, 8, 12, 13, 15, 19];
let i = 0,
  j = 0;
const newArr = [];
while (i < arr.length && j < arr2.length) {
  if (arr[i] < arr2[j]) {
    newArr.push(arr[i]);
    i++;
  } else {
    newArr.push(arr2[j]);
    j++;
  }
}
if (i < arr.length) {
  while (i < arr.length) {
    newArr.push(arr[i++]);
  }
}
if (j < arr2.length) {
  while (j < arr2.length) {
    newArr.push(arr2[j++]);
  }
}
console.log(newArr);
