function calculateSquare() {
  const input = document.getElementById('number');
  const result = document.getElementById('result');
  const value = input.value;

  // 1. Check if the input is empty or contains only whitespace
  // 2. Check if the value is not a valid number
  if (value.trim() === '' || isNaN(value)) {
    result.innerText = 'Invalid, please enter a number';
  } else {
    // 3. Convert to number and multiply by itself
    const num = Number(value);
    result.innerText = num * num;
  }
}
