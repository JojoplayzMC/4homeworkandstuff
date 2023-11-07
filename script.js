window.addEventListener('DOMContentLoaded', () => {
    // List of root words and their valid answers
    const wordData = [
      {
        root: "celebrate",
        answer: "celebration"
      },
      {
        root: "communicate",
        answer: "communication"
      },
      {
        root: "educate",
        answer: "education"
      },
      {
        root: "invent",
        answer: "invention"
      },
      {
        root: "motivate",
        answer: "motivation"
      },
      {
        root: "participate",
        answer: "participation"
      },
      {
        root: "relax",
        answer: "relaxation"
      },
      {
        root: "simplify",
        answer: "simplification"
      },
      {
        root: "visualize",
        answer: "visualization"
      },
      {
        root: "appreciate",
        answer: "appreciation"
      },
      {
        root: "inform",
        answer: "information"
      },
      {
        root: "inspire",
        answer: "inspiration"
      },
      {
        root: "calculate",
        answer: "calculation"
      },
      {
        root: "demonstrate",
        answer: "demonstration"
      },
      {
        root: "authorize",
        answer: "authorization"
      },
      {
        root: "interact",
        answer: "interaction"
      },
      {
        root: "construct",
        answer: "construction"
      },
      {
        root: "illuminate",
        answer: "illumination"
      },
      {
        root: "meditate",
        answer: "meditation"
      },
      {
        root: "navigate",
        answer: "navigation"
      },
      {
        root: "organize",
        answer: "organization"
      },
      {
        root: "penetrate",
        answer: "penetration"
      },
      {
        root: "regulate",
        answer: "regulation"
      },
      {
        root: "terminate",
        answer: "termination"
      },
      {
        root: "vibrate",
        answer: "vibration"
      },
      {
        root: "dramatize",
        answer: "dramatization"
      },
      {
        root: "criticize",
        answer: "criticization"
      },
      {
        root: "realize",
        answer: "realization"
      },
      {
        root: "localize",
        answer: "localization"
      }, ];
    let currentWordIndex = 0;
    let currentScore = 0;
  
    function updateScore() {
      document.getElementById("scoreValue").textContent = currentScore;
    }
  
    function getRandomWord() {
      currentWordIndex = Math.floor(Math.random() * wordData.length);
      return wordData[currentWordIndex];
    }
  
    function checkWord() {
      const userInput = document.getElementById("userInput").value;
      const validAnswer = wordData[currentWordIndex].answer;
      if (userInput.toLowerCase() === validAnswer.toLowerCase()) {
        currentScore += 1;
        document.getElementById("message").style.backgroundColor = "rgb(0, 255, 0)"
        document.getElementById("message").textContent = "Correct! Well done!";
      } else {
        currentScore -= 1;
        document.getElementById("message").style.backgroundColor = "rgb(255, 0, 0)"
        document.getElementById("message").textContent = "Try again. Incorrect answer.";
      }
      updateScore(); // Update the score on the page
      document.title = "Word Gane. Score: ".concat(currentScore);
      // Delay for 1 second before showing the next word
      setTimeout(function () {
        const newWord = getRandomWord();
        document.getElementById("rootWord").textContent = newWord.root;
        document.getElementById("userInput").value = "";
        document.getElementById("message").style.backgroundColor = "rgb(255, 255, 255)"
        document.getElementById("message").textContent = "";
      }, 1000); // 1000 milliseconds (1 second)
    }
    // Initialize the game with a random word
    const initialWord = getRandomWord();
    document.getElementById("rootWord").textContent = initialWord.root;
    // Add an event listener to execute checkWord when the button is clicked
    document.querySelector("button").addEventListener("click", checkWord);
  })