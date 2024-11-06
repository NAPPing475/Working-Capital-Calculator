document.addEventListener('DOMContentLoaded', () => {
    const tcaInput = document.getElementById('tca');
    const oclInput = document.getElementById('ocl');
    const explanationSection = document.getElementById('explanation');
    const explanationText = document.getElementById('explanation-text');
    const resultText = document.getElementById('result-text');

    // Add event listeners to input fields for Enter key press
    tcaInput.addEventListener('keydown', handleKeydown);
    oclInput.addEventListener('keydown', handleKeydown);

    function handleKeydown(event) {
        if (event.key === 'Enter') {
            calculateResults();
            // Show the explanation and scroll into view after the calculation
            explanationSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function calculateResults() {
        const tca = parseFloat(tcaInput.value);
        const ocl = parseFloat(oclInput.value);

        if (isNaN(tca) || isNaN(ocl)) {
            resultText.textContent = 'Please enter valid numbers for TCA and OCL.';
            explanationText.textContent = '';
            return;
        }

        // Example calculation (replace this with your actual logic)
        const result = tca + ocl; // Change this logic as needed
        resultText.textContent = `Result: ${result}`;

        // Update explanation text based on the calculation
        explanationText.textContent = `The result is calculated by adding TCA (${tca}) and OCL (${ocl}).`;
    }
});
