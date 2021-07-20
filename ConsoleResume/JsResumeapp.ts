let myName: string = "jeffery herd";
console.log("Name: " + myName.toUpperCase());

let myCareer: string = "Full Stack Developer";
console.log("Career: " + myCareer);

let description: string = "I'm only into computers so I can build The Iorn Giant";
console.log("Description: " + description + "\n");


function myInterest(interest: string) {
  if (interest == "Flag Football") {
    console.log("My Interest:\n" + interest);
  } 
  else {
    console.log(interest);
  }
}
myInterest("*   Flag Football");
myInterest("*   Video Games");
myInterest("*   Art Shows & Galleries");
myInterest("*   Improv Plumbing");
myInterest("*   Indoor Rock Climbing" + "\n")

function displayPosition(position: string, company: string, summary: string) {
  if (position == "UX Designer\n") {
    console.log("My Previous Experience:\n" + "*    " + position, company, summary);
  } else {
    console.log("*  " + position, company, summary);
  }
}

displayPosition(
  "UX Designer\n",
  "StockX\n",
  "Lead a team of developers and designers to build a new app and website design, assisted other teams, tried on shoes the whole 9"
);
displayPosition(
  "Lead Mattress/Cushion Tester\n",
  "The Comfort Institute\n",
  "Created testing software for participants to properly asses comfort level, personally tested and surveyed over 1500 mattresses and cushions, Assisted in the banning of uncomfortable plastic couch covers, promoted to lead after 3 months"
);
displayPosition(
  "Teaching Assistant & Tutor to Programming in Klingon, and Dathraki\n",
  "University of Alabama at Birmingham",
  "Lead 10 lectures, created curriculum (in support of the professor's curriculum), held office hours. \n"
);

console.log("My Skills: ")

function displaySkill(skillName: string, isCool: boolean) {
   if (isCool == true){
    console.log("*    " + "BAM: " + skillName)
  }else {
      console.log("*    " + skillName)
  }
}

displaySkill("HTML", false);
displaySkill("Javascript", false);
displaySkill("CSS", false);
displaySkill("Python", true);
displaySkill("Spanish Intermediate", false);
displaySkill("German Intermediate", false);
displaySkill("An edetic memory of every episode of 'The Office'", true)
displaySkill("Guitar", true);
