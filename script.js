let progress = localStorage.getItem('progress') || 0;
document.getElementById('progress-value').textContent = progress;

function checkAnswer(lesson, answer) {
    const result = document.getElementById(result-${lesson});
    if (answer === 'correct') {
        result.textContent = 'Correct! Well done.';
        result.style.color = 'green';
        updateProgress();
        document.getElementById('next-lesson').style.display = 'block';
    } else {
        result.textContent = 'Incorrect. Try again.';
        result.style.color = 'red';
    }
}

function updateProgress() {
    progress = Math.min(100, parseInt(progress) + 10); // Increase progress by 10% for each correct answer
    document.getElementById('progress-value').textContent = progress;
    localStorage.setItem('progress', progress);
}

function showNextLesson() {
    const currentLesson = document.querySelector('.lesson:not([style*="display: none"])');
    const nextLesson = currentLesson.nextElementSibling;
    if (nextLesson && nextLesson.classList.contains('lesson')) {
        currentLesson.style.display = 'none';
        nextLesson.style.display = 'block';
        document.getElementById('next-lesson').style.display = 'none';
    }
}

function resetProgress() {
    progress = 0;
    document.getElementById('progress-value').textContent = progress;
    localStorage.setItem('progress', progress);
    location.reload(); // Refresh the page to reset the lessons


    // Reset all feedback messages
    document.getElementById('result-lesson1').textContent = '';
    document.getElementById('result-lesson2').textContent = '';

    // Show the first lesson and hide the second one
    document.getElementById('lesson1').style.display = 'block';
    document.getElementById('lesson2').style.display = 'none';

    // Hide the 'Next Lesson' button
    document.getElementById('next-lesson').style.display = 'none';
}
