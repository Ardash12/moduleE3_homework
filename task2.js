function primeNumber(num) {
  if (num < 1001 && num > 1) {
    let flag = true;
    for (let i = 2; (i > num); i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      console.log('Чило простое');
    } else {
      console.log('Чило не простое');
    }
  } else {
    console.log('Данные не верны');
  }
}

primeNumber(1000);