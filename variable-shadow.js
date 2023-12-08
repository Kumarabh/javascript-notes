const a = 10;
let b = 20;
var c = 30;

// if(true) {
//   const a = 100;
//   const b = 200;
//   var c = 300;

// }

(function() {

  // a = 100; // assignment changes actual variable
  // b = 200;
  // c = 300;

  const a = 100;
  let b = 200;
  var c = 300;
})()
console.log(a, b, c);
