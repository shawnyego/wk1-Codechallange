let speed = prompt("Enter the car's speed: ");
speed = Number(speed);

if (speed < 70) {
  console.log("Ok");
} else {
  const points = Math.floor((speed - 70) / 5);
  console.log(`Points: ${points}`);
  if (points >= 12) {
    console.log("License suspended");
  }
}