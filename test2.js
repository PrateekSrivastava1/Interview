// a1 = [3, ,4 ,5 , -1, -2, 6], a2 = [5, -1, 10, -2]

function main(arr1 = [], arr2 = []) {
  let i = 0,
    j = 0;
  for (i = 0; i < arr1.length - arr2.length; i++) {
    let res = true,
      k = 0;
    for (j = i; j < arr2.length; j++) {
      console.log("here", arr1[j], arr2[k], i);
      if (arr1[j] !== arr2[k++]) {
        res = false;
        break;
      }
    }
    if (res) return true;
  }
  return false;
}

console.log(main([3, 4, 5, -1, -2, 6], [5, -1, -2]));
