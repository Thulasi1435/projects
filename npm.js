function calculate(operation, num1, num2) {
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error: Division by zero is not allowed.";
            }
            break;
        default:
            result = "Error: Invalid operation.";
    }

    return result;
}
