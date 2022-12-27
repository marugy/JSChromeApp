const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

const player = {
  name: "nico",
  points: 10,
  handsome: false,
  fat: true,
};

console.log(player);
console.log(player.name);

//내부 값도 변경 가능
player.name = "nicolas";
console.log(player["name"]);

player.lastName = "potato";
console.log(player);
