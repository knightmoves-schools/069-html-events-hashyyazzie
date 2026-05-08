function calculateSquare() {
  let value = document.getElementById('number').value;
  let result = document.getElementById('result');

  // Convert the input string to a number
  let num = Number(value);

  // Check if the value is empty or not a valid number
  if (value === '' || isNaN(num)) {
    result.innerText = 'Invalid, please enter a number';
  } else {
    // Multiply the number by itself and display the result
    result.innerText = num * num;
  }
}
