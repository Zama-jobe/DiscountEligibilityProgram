function checkEligibility() {
    // Retrieve values from input fields
    const age = document.getElementById('age').value;
    const isMember = document.getElementById('mStatus').checked;

    // Check eligibility based on criteria
    if (age >= 65) {
        displayResult('You are eligible for a Senior Discount!');
    } else if (age >= 18 && isMember) {
        displayResult('You are eligible for a Member Discount!');
    } else {
        displayResult('Sorry, you are not eligible for any discount.');
    }
}

function displayResult(message) {
    document.getElementById('result').textContent = message;
}
