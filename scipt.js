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

