function funcOne(num1) {
  return function funcTwo(num2) {
    return num1 + num2
  }
}
let result = funcOne(1)(2)
console.log(result);