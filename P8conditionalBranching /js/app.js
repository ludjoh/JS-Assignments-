const birthYear = 2000;
const currentYear = 2024;
let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);
const favoritenumber = 22;

// Save to a let variable named isChild, when the age is from 0 till 10.
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);

// Save to a let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);

// Save to a let variable named isAdult, when the age is 18 or more.
let isAdult =  ageOfPerson >= 18;

if (isChild) {
  console.log("You are a child");
}

if (isTeenager) {
  console.log("You are a teenager");
}
if (isAdult) {
  console.log("You are an adult");
}

console.log(favoritenumber);

if (favoritenumber > ageOfPerson) {
  console.log("Favorite number is greater");
}

if (favoritenumber <= ageOfPerson) {
  console.log("Age is Greater");
} else {
  console.log("Its the same ");
}

if (favoritenumber % 2 === 0) {
  console.log("Favorite Number is Even");
}
else {
  console.log("Favorite Number is Odd");
}
