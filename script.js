"use strict";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://playground-fb59f-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "ShoppingList");

// console.log(app);
// console.log(database);

const input = document.querySelector(".input");
const add = document.querySelector(".add");
const shoppingList = document.getElementById("shoppingList");

let todos = [];

add.addEventListener("click", function () {
  // push the input value to the database using firebase function
  push(shoppingListInDB, input.value);

  // append new list item to the shopping list
  appendItems(input.value);

  // clear the input field when button is pressed
  clear();
});

// use the onValue method from firebase
onValue(shoppingListInDB, function (snap) {
  let newSnap = Object.values(snap.val());
  //   console.log("Added new item - - > ", newSnap);
  //   console.log(newSnap);

  for (let i = 0; i < newSnap.length; i++) {
    let current = newSnap;
    appendItems(current[i]);
    // console.log(current[i]);
  }
});

// clear function
function clear() {
  input.value = "";
}

function appendItems(e) {
  //   shoppingList.innerHTML += `<li>${e}</li>`;
  let newLi = document.createElement("li");
  newLi.textContent = `${e}`;
  shoppingList.append(newLi);

  let itemId, itemValue;

  for (let i = 0; i < e.length; i++) {
    itemId = i;
    itemValue = e[i];

    // console.log("The item id is ", itemId);
    // console.log("The item value is ", itemValue);
    // console.log("- - - - - - - - - - - - - - - -");
  }

  // delete
  newLi.addEventListener("click", function () {
    let locationInDB = ref(database, `shoppingList${itemId}`);
    this.remove(locationInDB);
  });
}
