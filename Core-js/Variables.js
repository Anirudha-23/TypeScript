// Using var 
//It is work only function-scoped
var fullName = "Ani";
console.log("Using var:", fullName);

// Using let 
// It is work only block-scoped
let age = 21;
console.log("Using let:", age);

// Using const 
// It is work only block-scoped and can't be reassigned
const country = "India";
console.log("Using const:", country);

// You can reassign var and let
fullName = "Arka";
age = 30;
// country = "USA"; IF UE TRY TO UPDATE THIS WE SEE A ERROR 


console.log("Updated name (var):", fullName);
console.log("Updated age (let):", age);