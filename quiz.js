(function() {
  function buildQuiz() {
  
    const output = [];

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      const answers = [];

      
      for (letter in currentQuestion.answers) {
        
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

     
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

   
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    
    const answerContainers = quizContainer.querySelectorAll(".answers");

    
    let numCorrect = 0;

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      
      if (userAnswer === currentQuestion.correctAnswer) {
        
        numCorrect++;

        
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
       
        answerContainers[questionNumber].style.color = "red";
      }
    });

    
    resultsContainer.innerHTML = "You got " +`${numCorrect} out of ${myQuestions.length}  correct`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Who is the current Prime Minister of India?",
      answers: {
        a: "Pranab Mukherjee",
        b: "Rahul Gandhi",
        c: "Narendra Modi"
      },
      correctAnswer: "c"
    },
    {
      question: "Who invented Facebook?",
      answers: {
        a: "Mark Zuckerbuerg",
        b: "Bill Gates",
        c: "Steve Jobs"
      },
      correctAnswer: "a"
    },
	    {
      question: "World's  second most richest man?",
      answers: {
        a: "Warren Buffet",
        b: "Bill Gates",
        c: "Carlos Slim"
      },
      correctAnswer: "b"
    },
	    {
      question: "Which country is the World's Biggest Democracy?",
      answers: {
        a: "Canada",
        b: "India",
        c: "United States of America"
      },
      correctAnswer: "b"
    },  
    {
      question: "Who is the current President of America?",
      answers: {
        a: "Barak Obama",
        b: "Narendra Modi",
        c: "Donald trump",
       
      },
      correctAnswer: "c"
    }
  ],
question: "Who is the richest man of the world?",
      answers: {
        a: "Bill gates",
        b: "Jeff Bezos",
        c: "Warren Buffet"
      },
      correctAnswer: "b"
    },
    {
      question: "Who is about to buy Snapdeal?",
      answers: {
        a: "Amazon",
        b: "Flipkart",
        c: "Shopclues"
      },
      correctAnswer: "b"
    },
	    {
      question: "One of the world's 7 wonders?",
      answers: {
        a: "Eiffel tower",
        b: "Gateway of India",
        c: "India gate"
      },
      correctAnswer: "a"
    },
	    {
      question: "What is also called as the the 8th continent?",
      answers: {
        a: "Euroasia",
        b: "Zealandia",
        c: "Indian Subcontinent"
      },
      correctAnswer: "b"
    },  
    {
      question: "What is the so-called ruler of the Indian Telecom industry?",
      answers: {
        a: "Bharti Airtel",
        b: "Vodafone",
        c: "Jio 4G",
       
      },
      correctAnswer: "c"
    }
  ];

  
  buildQuiz();


  submitButton.addEventListener("click", showResults);
})();