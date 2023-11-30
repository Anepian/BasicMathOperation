/*
 * This program allows the user to enter two numbers and a mathematical operation (+, -, *, /).
 * It then performs the selected operation and displays the result in the terminal.
 * If an invalid operation is entered, an error message is displayed.
 * Finally, the terminal's read interface is closed.
 */

/*
 * Este programa permite al usuario ingresar dos números y una operación matemática (+, -, *, /).
 * Luego, realiza la operación seleccionada y muestra el resultado en la terminal.
 * Si se ingresa una operación inválida, se muestra un mensaje de error.
 * Finalmente, se cierra la interfaz de lectura de la terminal.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, // Sets the standard input as the user input in the terminal
    output: process.stdout // Sets the standard output as the output in the terminal
});

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        rl.question('Enter the operation (+, -, *, /): ', (operator) => {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(num1) + parseFloat(num2); // Adds the two entered numbers
                    break;
                case '-':
                    result = parseFloat(num1) - parseFloat(num2); // Subtracts the two entered numbers
                    break;
                case '*':
                    result = parseFloat(num1) * parseFloat(num2); // Multiplies the two entered numbers
                    break;
                case '/':
                    result = parseFloat(num1) / parseFloat(num2); // Divides the two entered numbers
                    break;
                default:
                    console.log('Invalid operation'); // If an invalid operation is entered, displays an error message
                    rl.close(); // Closes the terminal's read interface
                    return;
            }
            console.log(`The result is: ${result}`); // Displays the result of the operation in the terminal
            rl.close(); // Closes the terminal's read interface
        });
    });
});