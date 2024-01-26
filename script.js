"use strict";

// object containing messages and functions needed to display each message
const messageHandler = {
  message1: "Button 1 clicked",
  message2: "Button 2 clicked",
  message3: "Button 3 clicked",
  displayMessage1: function () {
    this.displayMessage(this.message1); // this used to give reference to the other variables in the object
    // messaged1 passed in as parameter to display on webpage
  },
  displayMessage2: function () {
    this.displayMessage(this.message2);
  },
  displayMessage3: function () {
    this.displayMessage(this.message3);
  },
  displayMessage: function (message) {
    // function takes desired message as parameter and displays on webpage
    const p = document.createElement("p");
    p.innerText = message;
    document.body.appendChild(p);
  },
};

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

//event listeners for each button to access the functions to display each message
document.getElementById("btn1").addEventListener(
  "click",
  messageHandler.displayMessage1.bind(messageHandler) // bind used to give reference to original object
  // allows 'this' in function to reference original object rather than the button clicked
);

btn2.addEventListener(
  "click",
  messageHandler.displayMessage2.bind(messageHandler)
);

btn3.addEventListener(
  "click",
  messageHandler.displayMessage3.bind(messageHandler)
);

let guy = {
  name: "John",

  greet: function () {
    console.log("Hello,", this.name);
  },
};

let guy2 = {
  name: "Jeff",

  greet: () => {
    console.log("Hello,", this.name); //this cannot reference in arrow function without use of bind
  },
};
