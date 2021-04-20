function gameContainer(){
    function quizGame(){
      const product = [];
  
      /*myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          const answers = [];

          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          product.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );*/

      quizContainer.innerHTML = product.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;

      myQuestions.forEach( (currentQuestion, questionNumber) => {
  

        const answerContainer = answerContainers[questionNumber];
        const picked = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(picked) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
  
    
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What is the 1st letter of the alphabet?",
        answers: {
          a: "a",
          b: "b",
          c: "b"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the 2nd letter of the alphabet?",
        answers: {
          a: "a",
          b: "b",
          c: "c"
        },
        correctAnswer: "b"
      },
      {
        question: "What is the 3rd letter of the alphabet?",
        answers: {
          a: "a",
          b: "b",
          c: "c"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the 4th letter of the alphabet?",
        answers: {
          a: "d",
          b: "e",
          c: "f"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the 6th letter of the alphabet?",
        answers: {
          a: "c",
          b: "d",
          c: "e",
          d: "f"
        },
        correctAnswer: "d"
      }
    ];
  
    quizGame();
  
    submitButton.addEventListener('click', showResults);
  }
  gameContainer()