// Initialize progress
let progress = 0;

// Function to check the answer for a lesson
function checkAnswer(lessonId, answer) {
    const resultElement = document.getElementById(`result-${lessonId}`);
    
    if (answer === 'correct') {
        resultElement.textContent = "Correct! Well done!";
        resultElement.style.color = "green";
        updateProgress();
        document.getElementById('next-lesson').style.display = "inline-block";
    } else {
        resultElement.textContent = "Wrong! Try again.";
        resultElement.style.color = "red";
    }
}

// Function to update progress
function updateProgress() {
    progress += 25; // Increase progress by 25% for each correct answer
    const progressValue = document.getElementById('progress-value');
    progressValue.textContent = progress;

    if (progress >= 100) {
        progressValue.textContent = "100";
        alert("Congratulations! You've completed all lessons.");
    }
}

// Function to show the next lesson (for future implementation)
function showNextLesson() {
    alert("Next lesson coming soon!"); // Placeholder
    // You can add functionality here to load the next lesson
}

// Function to reset progress
function resetProgress() {
    progress = 0;
    document.getElementById('progress-value').textContent = progress;
    document.getElementById('next-lesson').style.display = "none";
    const resultElements = document.querySelectorAll('[id^="result-"]');
    resultElements.forEach(result => result.textContent = "");
}

