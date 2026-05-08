function calculateSquare() {
  // 1. Get the elements
  const inputElement = document.getElementById('number');
  const resultElement = document.getElementById('result');
  
  // 2. Get the value
  const value = inputElement.value;

  // 3. Validation: Check if value is empty OR not a number
  // We use parseFloat to ensure we are dealing with digits
  if (value === "" || isNaN(value)) {
    resultElement.innerHTML = "Invalid, please enter a number";
  } else {
    // 4. Perform the math
    const num = parseFloat(value);
    const squared = num * num;
    
    // 5. Display the result
    resultElement.innerHTML = squared;
  }
}
