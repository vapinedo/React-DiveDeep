let counter = { name: "Counter" };
let counterValue = 1;

function pureCounter(counter, value) {
  return `${counter.name} ${value}`;
}

function notPureCounter(counter, value) {
  counter.name = counter.name + " Tony";
  counterValue = counterValue + 1;
  return `${counter.name} ${value}`;
}

console.log(pureCounter(counter, counterValue));
console.log(pureCounter(counter, counterValue + 1));
console.log(pureCounter(counter, counterValue));

console.log("----------------");

console.log(notPureCounter(counter, counterValue));
console.log(notPureCounter(counter, counterValue + 1));
console.log(notPureCounter(counter, counterValue));
