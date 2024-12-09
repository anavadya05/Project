// Get the result input field
const resultField = document.getElementById("result");

// Add click event listeners to all buttons
document.querySelectorAll(".calc-button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value"); // Get the value from the button
        resultField.value += value; // Append the value to the result display
    });
});

// Clear the result field when the "Clear" button is pressed
document.getElementById("clear").addEventListener("click", () => {
    resultField.value = ""; // Reset the input field
});

// Perform the calculation when the "=" button is clicked
document.getElementById("equals").addEventListener("click", () => {
    try {
        resultField.value = eval(resultField.value); // Evaluate the expression in the result field
    } catch (error) {
        alert("Invalid input, please check the expression!"); // Show error if the expression is invalid
        resultField.value = ""; // Clear the result field
    }
});

// Modulo operation when "%" button is clicked
document.getElementById("modulo").addEventListener("click", () => {
    resultField.value += "%"; // Add "%" symbol for modulo
});

// Logarithm (base-10) when the "log" button is clicked
document.getElementById("log").addEventListener("click", () => {
    try {
        const number = parseFloat(resultField.value); // Get the number from the result field
        if (number > 0) {
            resultField.value = Math.log10(number); // Calculate log base-10 of the number
        } else {
            alert("Logarithm is undefined for zero or negative numbers.");
        }
    } catch (error) {
        alert("Invalid input for logarithm.");
    }
});

// Square of a number when the "square" button is clicked
document.getElementById("square").addEventListener("click", () => {
    try {
        const number = parseFloat(resultField.value); // Get the number
        resultField.value = Math.pow(number, 2); // Calculate the square of the number
    } catch (error) {
        alert("Invalid input for square calculation.");
    }
});

// Square root when the "sqrt" button is clicked
document.getElementById("sqrt").addEventListener("click", () => {
    try {
        const number = parseFloat(resultField.value); // Get the number
        if (number >= 0) {
            resultField.value = Math.sqrt(number); // Calculate the square root
        } else {
            alert("Square root is undefined for negative numbers.");
        }
    } catch (error) {
        alert("Invalid input for square root.");
    }
});
