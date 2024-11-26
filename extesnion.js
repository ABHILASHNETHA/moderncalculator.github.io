document.getElementById('calculate').addEventListener('click', function() {
    // Get the first measurement in feet and inches
    const feet1 = parseInt(document.getElementById('feet1').value) || 0;
    const inches1 = parseInt(document.getElementById('inches1').value) || 0;

    // Get the second measurement in feet and inches
    const feet2 = parseInt(document.getElementById('feet2').value) || 0;
    const inches2 = parseInt(document.getElementById('inches2').value) || 0;

    // Get the selected operation
    const operation = document.getElementById('operation').value;

    // Convert both measurements to inches
    const totalInches1 = (feet1 * 12) + inches1;
    const totalInches2 = (feet2 * 12) + inches2;

    let resultInches;

    // Perform the chosen operation
    if (operation === "add") {
        resultInches = totalInches1 + totalInches2;
    } else {
        resultInches = totalInches1 - totalInches2;
    }

    // Convert the result back to feet and inches
    const resultFeet = Math.floor(resultInches / 12);
    const resultInchesRemainder = resultInches % 12;

    // Display the result
    document.getElementById('result').innerText = `Result: ${resultFeet}' ${resultInchesRemainder}"`;
});


