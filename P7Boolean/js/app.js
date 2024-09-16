const birthYear = 1963;
const currentYear = 2024;
let ageofPerson = currentYear - birthYear;

let isChild = ageofPerson <= 11 && ageofPerson >=0 ;

  let isTeenager = ageofPerson >= 11 && ageofPerson <= 17;

  let isAdult = ageofPerson >= 18  ;

  console.log("Personen är "+ ageofPerson +" gammal");

  console.log("Personen är ett barn: "+ isChild+"" );
console.log("Personen är en tonåring:  "+ isTeenager +"");
console.log("Personen är vuxen: "+isAdult+ "");

