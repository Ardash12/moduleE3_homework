function count(a, b) {
  const intervalId = setInterval(function(){
    console.log(a);
    a++
    if (a > b){
      clearInterval(intervalId);
    }
  }, 1000);
};

count(10, 15)
