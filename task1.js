function countEvenOdd(arr) {
  let even = 0;
  let odd = 0;
  let zero = 0;

  arr.forEach(function(item, index, array){
    if ((typeof item) === 'number' && !isNaN(item)){
      if (item === 0) {
        zero++
      } else if (item % 2 === 0) {
        even++
      } else if (item % 2 === 1) {
        odd++
      }
    }
  })
  console.log(`Чётных: ${even}, нечётных: ${odd}, нулей: ${zero}`);
  return `Чётных: ${even}, нечётных: ${odd}, нулей: ${zero}`
}
const arr = [2, 3, 4, 5, null, 0, 'g', undefined, NaN];
console.log(countEvenOdd(arr));