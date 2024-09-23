//let studentNames = ["Olivia", "Ruben", "James", "Liam", "Rufus", "Lucas"];

//studentNames[2] = "Micheal";
//studentNames.push("Ben10");

//for (i = 0; i < studentNames.length; i++) {
 // console.log("Hejsan " +studentNames[i]+"!");
//}

let randomNumberCount = [0,0,0,0,0,0,0,0,0,0];

randomNumberCount[0] += 1;

for (i = 0; i < 100000; i++) {
 let randomNumber =  getRandomInt(10);
 randomNumberCount[randomNumber] += 1;
}

for (let i = 0; i < randomNumberCount.length; i++) {
console.log("I rolled " +i+ " " +randomNumberCount[i]+ " times");
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
