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

// const person = {
//   FirstName: "Henry",
//   LastName: "Peter",
//   Score: 40.5,
//   isAdmin: false,
//   Hobbies: ["cooking", "bet9ja", "boxing"],
//   Address: {
//     City: "Owerri",
//     LGA: "Owerri-West",
//     PostalCode: 460120,
//   },
// };
// console.log(person.Address.LGA);
// const { FirstName, LastName } = person;
// console.log(`${FirstName} ${LastName}`);
// console.log(JSON.stringify(person));     JSON format

// const cartItems = [
//   {
//     id: 1,
//     productName: "Sugar",
//     quantity: 5,
//     isPaid: false,
//     category: "beverages",
//     price: 1000,
//   },
//   {
//     id: 2,
//     productName: "Fridge",
//     quantity: 2,
//     isPaid: false,
//     category: "electronics",
//     price: 1000,
//   },
//   {
//     id: 3,
//     productName: "Milk",
//     quantity: 5,
//     isPaid: true,
//     category: "beverages",
//     price: 1000,
//   },
//   {
//     id: 4,
//     productName: "Milo",
//     quantity: 5,
//     isPaid: false,
//     category: "beverages",
//     price: 2000,
//   },
// ];
// console.log(cartItems[0].id);

// for loops
// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }
// let i = 0;
// while (i <= 25) {
//   console.log(`This is the loop of ${i}`);
//   i++;
// }

const cartItems = [
  {
    id: 1,
    productName: "Sugar",
    quantity: 5,
    isPaid: false,
    category: "beverages",
    price: 1000,
  },
  {
    id: 2,
    productName: "Fridge",
    quantity: 2,
    isPaid: false,
    category: "electronics",
    price: 1000,
  },
  {
    id: 3,
    productName: "Milk",
    quantity: 5,
    isPaid: true,
    category: "beverages",
    price: 1000,
  },
  {
    id: 4,
    productName: "Milo",
    quantity: 5,
    isPaid: false,
    category: "beverages",
    price: 2000,
  },
];
const store = cartItems
  .filter(function (listItems) {
    return listItems.price === 1000;
  })
  .map(function (listItems) {
    return listItems.productName;
  });
console.log(store);

// (filter)
// const store = cartItems.filter(function (listItems) {
//   return listItems.isPaid === false;
// });
// console.log(store);

// (map loop)
// const store = cartItems.map(function (listItems) {
//   return listItems.productname;
// });
// console.log(store);

// (forEach)
// cartItems.forEach(function (items) {
//   console.log(items.productName);
// });

// for (items of cartItems) {
//   console.log(items.productName);
// }

// let i = 0;
// while (i <= cartItems.length) {
//   console.log(cartItems[i].category);
//   i++;
// }

// for (let i = 0; i <= cartItems.length; i++) {
//   console.log(cartItems[i].productName);
// }
