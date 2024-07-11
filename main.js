// console.warn("welcome to my page");
// let gender;
// gender = "26";

// console.log(gender);
// const firstname = "ebuka";
// const lastname = "ifeanyi";
// const age = 30;
// const isAdmin = false;
// const x = null;
// const y = undefined;
// console.log(
//   "my name is " + firstname + " " + lastname + " i am " + age + " years old"
// );
// console.log(`my name is ${firstname} ${lastname} i am ${age} years old`);
// console.log(firstname.toUpperCase());
// const title = "Welcome, ICT, laptop, Router";
// console.log(title.length);
// console.log(title.split(","));

// array..........................................
// const student = ["Web", "Home", "Kitchen", 6, true];
// student.pop();    pops out the last word
// student.unshift("Computer");   unshift makes words appear in the beginning
// student.push("gate", "hell");
// console.log(student);

const person = {
  FirstName: "Henry",
  LastName: "Peter",
  Score: 40.5,
  isAdmin: false,
  Hobbies: ["cooking", "bet9ja", "boxing"],
  Address: {
    City: "Owerri",
    LGA: "Owerri-West",
    PostalCode: 460120,
  },
};
const { FirstName, LastName } = person;
console.log(`${FirstName} ${LastName}`);
// console.log(JSON.stringify(person));     JSON format
