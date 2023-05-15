let users = {
  "01": "samuel ma",
  "02": "peter ma",
  "03": "john ma",
  "04": "jack ma",
  "05": "pony ma",
};

console.log("Keys ===>  ", Object.keys(users));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");

console.log("Values ===>  ", Object.values(users));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");

console.log("Entries ===>  ", Object.entries(users));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");

/*
    Challenge 1: Create a let variable called "userEmails" and use one of 
    Object methods to set it equal to an arrayas with the values
*/
let userEmails = Object.values(users);
console.log(userEmails);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");

/*
    Challenge 2: Create a let variable called "userIds" and use one of the
    Object methods to set it equal to an array with the keys
*/
let userIds = Object.keys(users);
console.log(userIds);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");

/*
    Challenge 3: Create a let variable called "userEntries" and use one of the
    Object methods to set it equal to an array with both the keys and values
*/
let userEntries = Object.entries(users);
console.log(userEntries);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");

