// Arithmetic operations
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) return "Error: Division by zero";
        return a / b;
    }
};

// Get input values with validation
function getInputValues() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields");
        return null;
    }
    
    return { num1, num2 };
}

// Calculate and display result
function performOperation(operation) {
    const inputs = getInputValues();
    if (!inputs) return;
    
    const result = operations[operation](inputs.num1, inputs.num2);
    document.getElementById('calculation-result').textContent = result;
}

// Event listeners
document.getElementById('add').addEventListener('click', () => performOperation('add'));
document.getElementById('subtract').addEventListener('click', () => performOperation('subtract'));
document.getElementById('multiply').addEventListener('click', () => performOperation('multiply'));
document.getElementById('divide').addEventListener('click', () => performOperation('divide'));

// Clear result when inputs change
document.getElementById('number1').addEventListener('input', () => {
    document.getElementById('calculation-result').textContent = '0';
});
document.getElementById('number2').addEventListener('input', () => {
    document.getElementById('calculation-result').textContent = '0';
});
