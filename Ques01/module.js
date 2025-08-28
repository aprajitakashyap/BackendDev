// exports.student = {
//   name: 'Aprajita',
//   RollNo: 'R2142232085',
//   details: {
//     Branch: 'CSE',
//     Year: '3rd',}
// };

// exports.greet = function(name) {
//     return `Hello, ${name}! Welcome to the module.`;
// };

// Using ES6 module syntax

// Nested object
export const student = {
  name: "Aprajita",
  course: "BTech",
  details: {
    rollNo: 101,
    branch: "CSE"
  }
};

// Function export
export function greet(name) {
  return `Hello, ${name}! Welcome to ES Modules.`;
}