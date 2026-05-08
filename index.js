function calculateSquare() {
    // 1. Grab the elements exactly when the function is called
    let input = document.getElementById('number');
    let result = document.getElementById('result');
    
    // 2. Get the raw value
    let value = input.value;

    // 3. Validation
    // This check covers: empty strings, strings with only spaces, and non-numbers
    if (value.trim() === "" || isNaN(value)) {
        result.innerHTML = "Invalid, please enter a number";
    } else {
        // 4. Square the value 
        // We multiply the value by itself (JS will convert the string to a number)
        let squared = value * value;
        
        // 5. Update the result div
        result.innerHTML = squared;
    }
}
