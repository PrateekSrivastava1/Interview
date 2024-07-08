const time = "21.30";
const [hour, min] = time.split(".");
let newTime = "";
if (hour < 12) {
  newTime = `${hour}.${min} AM`;
} else if (hour >= 12) {
  newTime = `${hour === 12 ? 12 : hour - 12}.${min} PM`;
} else if (hour === 0) {
  newTime = `12.${min} AM`;
}
console.log(newTime);
