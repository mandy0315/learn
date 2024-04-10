var a = 1

function hello() {
  a = 2
  var a = 3
  console.log(a);  // (A)會印出什麼？3(1.建立期 2.執行期)
}

console.log(a);    // (B)會印出什麼？1
hello()
console.log(a);    // (C)會印出什麼？1


