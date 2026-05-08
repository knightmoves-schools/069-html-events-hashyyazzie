function calculateSquare() {
    // Select the elements
    let input = document.getElementById('number');
    let result = document.getElementById('result');
    
    // Get the value from the input
    let val = input.value;

    // VALIDATION:
    // We check if it's empty OR if it's not a number.
    // .trim() ensures that a string of just spaces is also caught.
    if (val.trim() === "" || isNaN(val)) {
        result.innerHTML = "Invalid, please enter a number";
    } else {
        // MATH:
        // Multiplying a numeric string by itself forces JS to treat it as a number.
        let squared = val * val;
        result.innerHTML = squared;
    }
}
