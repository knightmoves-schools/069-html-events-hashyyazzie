function calculateSquare() {
  // 1. Select the elements by their IDs
  const input = document.getElementById('number');
  const result = document.getElementById('result');
  const value = input.value;

  // 2. Validation Logic
  // We check if it's empty (val.trim() === "") OR if it's not a number (isNaN)
  if (value.trim() === "" || isNaN(value)) {
    result.textContent = "Invalid, please enter a number";
  } else {
    // 3. Calculation Logic
    const num = Number(value);
    result.textContent = num * num;
  }
}

// 4. The "Wiring" 
// This tells the button to run the function when clicked.
document.getElementById('calculate').onclick = calculateSquare;
