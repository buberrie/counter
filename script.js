//set initialize count
let currentValue = 7;

//select all buttons and values
let count = document.getElementById('value');
let btnAdd = document.getElementById('add');
let btnLower = document.getElementById('lower')

console.log(add)
console.log(lower)
console.log(value)

btnAdd.addEventListener('click', (e) => {
    e.preventDefault(); 
  count.innerText = currentValue;
  currentValue = currentValue + 1;
  if (count.innerText >= 50) {
    count.innerText = 50;
  } else {
    count.value = currentValue;
  }

});

btnLower.addEventListener('click', (e) => {
    e.preventDefault();
    count.innerText = currentValue;
    currentValue = currentValue - 1;
    if (count.innerText <= 0) {
        count.innerText = 0;
      } else {
        count.value = currentValue;
      }
});

