var questionArray = [
    
    {
        question: "What are the 3 main programming languages of the internet?",
        answers: ["jQuery, MongoDB, Python","HTML, CSS, JavaScript","C++, CSharp, Unity"],
        correctAnswer: "HTML, CSS, JavaScript",    
  
    },
    {
        question: "What type of event in JavaScript makes a button work?",
        answers: ["clickOn","doubleClick","onClick",],
        correctAnswer: "onClick"
           
    },
    {
        question: "What is one way you can make a website mobile-friendly?",
        answers: ["Media Queries","Smaller font sizes", "You dont, websites are automatically mobile-friendly"],
        correctAnswer: "Media Queries"  
         
    },
    {
        question: "In web development, which of the following is used to call HTML ID elements from a JavaScript class?",
        answers: [".", "#", "$"],
        correctAnswer: "$",    
  
    },
    {
        question: "How many programming languages are there?",
        answers: ["700", "1050", "120"],
        correctAnswer: "700", 
         
    },

]

//listing all variables I will need
var userScore = 0;
var questionAmount = 0;
var timerBox = document.querySelector("#timer");
var questionBox = document.querySelector("#maincontainer");
var startButton = document.querySelector("#startQuiz");
var createList = document.createElement("ul");
//variables for timer
var totalSeconds = 60;
var holdPenaltyTime= 0;
var penaltyTime = 15;

 //this will start timer and track penalty times. Will call displayQuestion.
quizStart.addEventListener("click", function(){
   
    //BUTTON HIDDEN!
     this.style.visibility = "hidden";
     //check if timer at zero
     if (holdPenaltyTime === 0){
         holdPenaltyTime = setInterval(function(){
             totalSeconds--;
             timerBox.textContent = "Time left: " + totalSeconds;
     
     if (totalSeconds === 0){
         clearInterval(holdPenaltyTime);
         timerBox.textContent = "Time is up!";
 
         }
     }, 1000);
 }
    
 //console.log(quizStart, timerBox)
 displayQuestion(questionAmount);
 } 
 
  ) 
  //function that displays questions on screen. Need to call it in the function
  //above with the eventlistener.
  function displayQuestion(questionAmount){
     questionBox.innerHTML = "";
     createList.innerHTML = "";
     //need a loop that goes through my question array. Setting variable for q and a
         for (var i = 0; i <questionArray.length; i++){
             var gameQuestion = questionArray[questionAmount].question;
             var gameAnswers = questionArray[questionAmount].answers;
             questionBox.textContent = gameQuestion;
 
            // console.log(questionArray);
         }
         //bug fixed in function
             gameAnswers.forEach(function (newQuestion){
                 var listQuestion = document.createElement("li");
                 listQuestion.textContent = newQuestion;
                 questionBox.appendChild(createList);
                 createList.appendChild(listQuestion);
                 listQuestion.addEventListener("click", (evaluate));
                // console.log(createList);
          }
      )
 }