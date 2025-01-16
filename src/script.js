import { commonPasswords } from "./assets/10k-common-passwords";

document.getElementById('current-year').textContent = new Date().getFullYear();

function checkPasswordStrengh() {
    const password = document.getElementById('password').value;
    const output = document.getElementById('strength-output');

    let score = 0;
    let type_count = 0;

    if (commonPasswords.includes(password)) {
        output.textContent = 'Weak: Common password';
        output.style.color = 'red';
        return;
    }
    if (password.length >= 8) {
        score += 1; // Add 1 point for length
        if (password.length >= 10) {
            score ++; // reward another point for longer password
            if (password.length >= 12) {
                score ++; // reward another point for longer password
            }
        }
    }
    if (/[a-zA-Z]/.test(password)) {
        score ++; // Add 1 point for containing letters
        type_count ++;
    }
    if (/\d/.test(password)) { 
        score ++; // 1 point for containing numbers
        type_count ++;
    }
    if (/\W/.test(password)) {
        score ++; // 1 point for containing special characters
        type_count ++;
    }

     // Determine the password strength based on the score
     if (score <= 2) {
        output.textContent = 'Weak';
        output.style.color = 'red';
    } else if (3 <= score <= 4) {
        output.textContent = 'Medium';
        output.style.color = 'orange';
    } else {
        output.textContent = 'Strong';
        output.style.color = 'green';
    }
    output.textContent += `Password strength score: ${score}/6`
}

checkPasswordStrengh()