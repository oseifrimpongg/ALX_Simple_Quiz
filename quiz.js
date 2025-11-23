const submitButton = document.getElementById("submit-answer");
submitButton?.addEventListener("click", checkAnswer);

function checkAnswer()
{
   const correctAnswer = "4";
   const selected = document.querySelector("input[name=quiz]:checked");
   const feedback = document.getElementById("feedback");

   const userAnswer = selected.value;

   userAnswer === correctAnswer
      ? feedback.textContent = "Correct! Well done."
      : feedback.textContent = "That's incorrect. Try again.";

}
