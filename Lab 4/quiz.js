const quizQuestions = [
  {
    question: "1) What does HTML stand for?",
    answer: "hypertext markup language"
  },
  {
    question: "2) Which language is used to style web pages?",
    answer: "css"
  },
  {
    question: "3) Which keyword is used to declare a variable in JavaScript?",
    answer: "let"
  },
  {
    question: "4) What does DOM stand for?",
    answer: "document object model"
  },
  {
    question: "5) Which function displays a popup alert in JavaScript?",
    answer: "alert"
  },
  {
    question: "6) JavaScript runs mainly on the (client or server) side?",
    answer: "client"
  }
];

function runQuiz() {
  let score = 0; 

  alert("Welcome to the JavaScript Quiz Game! 🧠\nAnswer the questions shown in the prompts.");

  for (let i = 0; i < quizQuestions.length; i++) {
    const current = quizQuestions[i];

    let userInput = prompt(current.question);

    if (userInput === null) {
      alert("Quiz cancelled. Your score: " + score);
      return;
    }
    const userAnswer = userInput.toLowerCase().trim();
    const correctAnswer = current.answer.toLowerCase().trim();

    if (userAnswer === correctAnswer) {
      score++;
      alert("✔ Correct!");
    } else {
      alert(
        "✘ Incorrect.\nYour answer: " +
          userInput +
          "\nCorrect answer: " +
          current.answer
      );
    }
  }

  alert(
    " Quiz Completed!\nYour final score is: " +
      score +
      "/" +
      quizQuestions.length
  );
  console.log("Final Score:", score, "/", quizQuestions.length);
}
