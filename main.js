console.log('my string to console!');

const counter = function() {
  let num = 0;
  
  return function() {
    num++;
    console.log(`Number is :${num}, now`);
  }
}

let firstCounter = counter();
firstCounter();
firstCounter();
firstCounter();
firstCounter();
firstCounter();
firstCounter();