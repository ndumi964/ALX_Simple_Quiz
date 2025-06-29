// Function to check the user's answer
function checkAnswer() {
    // Step 1: Identify the correct answer
    const correctAnswer = "4";
    
    // Step 2: Retrieve the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an option was selected
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }
    
    const userAnswer = selectedOption.value;
    
    // Step 3: Compare the user's answer with the correct answer
    const feedbackElement = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Step 4: Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);