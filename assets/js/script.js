var oForm       = document.querySelector(".task-form"); 
var oScore      = document.querySelector(".showScore"); 
var uScore      = document.querySelector("#yourScore"); 
var usrInitials = document.querySelector("#uSubmitInitials");
var Title       = document.querySelector(".page-title"); 
var Parg        = document.querySelector(".paragraph");

var oQuestions  = document.querySelector(".questionnaire");
var container   = document.querySelector(".btn-group");   // get position/element for div class="btn-group"
var start       = document.querySelector("#start");
var btn1        = document.querySelector("#option1");
var btn2        = document.querySelector("#option2");
var btn3        = document.querySelector("#option3");
var btn4        = document.querySelector("#option4");

var oTimer      = document.querySelector("#timer");
/*  Whish List - not implemented yet
    var oquestion = document.querySelector("#question"); */
var oResult     = document.querySelector("#question_result")



var curQuestionIndex = 0;
var nCorrect  = 0;
var totalScore= 0;

var nSecondsLeft = 60;
var lTimeOut  = Boolean(false);


var questions = [
    {   questionNumber: 1,
        question: "Commonly used data types DO NOT include:",
        h1: "",
        option1: "1. string",
        option2: "2. booleans", 
        option3: "3. alerts", 
        option4: "4. numbers", 
        answer : "3"
    },
    {   questionNumber: 2,
        question: "The condition in an if / else statement is enclosed within ___:",
        h1: "",
        option1: "1. quotes", 
        option2: "2. curly brackets", 
        option3: "3. parenthesis", 
        option4: "4. square brackets", 
        answer : "3"
    },
    {   questionNumber: 3,
        question: "Arrays in JavaScript can be used to store ___:",
        h1: "",
        option1: "1. numbers and strings",
        option2: "2. other arrays",  
        option3: "3. booleans", 
        option4: "4. all of the above", 
        answer : "4"
    },
    {   questionNumber: 4,
        question: "String values must be enclosed within ___ when being assigned to variables",
        h1: "",
        option1: "1. commas",
        option2: "2. curly brackets",  
        option3: "3. quotes", 
        option4: "4. parenthesis", 
        answer : "3"
    } ,
    {   questionNumber: 5,
        question: "A very useful tool used during edvelopment and debugging for printing content to the debugger is:",
        h1: "",
        option1: "1. JavaScript",
        option2: "2. terminal/bash",  
        option3: "3. for loops", 
        option4: "4. console.log", 
        answer : "4"
    } 
]

function saveScore() {
    var scoreItem = {user: }
}

usrInitials.addEventListener("click", function(event) {
    event.preventDefault()
    alert("Are we done?");
    oScore.style.display     = "none";  
    saveScore()
})

function displayscore(nCorrect) {
    // Make   <div class="questionnaire">  inviible
    oQuestions.style.display = "none";   // Hide it
    oScore.style.display     = "block";  // Make it visible

    /* NOTE:

       clearInterval() should clear the variable, not the function

    */
    //   clearInterval(f_timer);     DOESN'T WORK   1st Attempt
    clearInterval(timerStart);        // After contacting Learning Assistant



    // 22.08.26 Created <div class='showScore'> with all elements inside

    // 22.08.26 Will not create elements here
    /*
    h1   = document.createElement("h1");
    h1.innerText = "All Done!!";
    oScore.appendChild(h1);

    p1   = document.createElement("p");
    p1.innerText = "Your final score is " + (nCorrect*20) ;
    oForm.appendChild(p1);
    */
   // 22.08.26 Will not create elements here
   
   if(ncorrect>0) {
     totalScore =  nCorrect*20;
   } else {
     totalScore = 0
   }

   }
   uScore.innerHTML = "Your final score is " + (totalScore);

// BEG - Get it off tje fisplayscore function
//    usrInitials.addEventListener("click", function(event) {
//         event.preventDefault()
//         alert("Are we done?");
//         oScore.style.display     = "none";  
        
// //    var element = event.target;

//    })
// END - Get it off tje fisplayscore function



}

function f_timer() {
    nSecondsLeft --;
    if (nSecondsLeft>0) {
        oTimer.innerHTML = nSecondsLeft + " second left";
    } else {
        if (lTimeOut) {

        } else {
            oTimer.innerHTML = "TIME OUT !!!"
            oTimer.style.color = 'red';
            lTimeOut = true;
            displayscore(nCorrect)
        }
    }
}


function setElements(pnQuestion) {
    Title.innerHTML=  questions[pnQuestion]['question'];
    Parg.innerHTML =  questions[pnQuestion]['h1'];
    btn1.innerHTML =  questions[pnQuestion]['option1'];
    btn2.innerHTML =  questions[pnQuestion]['option2'];
    btn3.innerHTML =  questions[pnQuestion]['option3'];
    btn4.innerHTML =  questions[pnQuestion]['option4'];

    /* Whish List - not implemented yet
       oquestion.innerHTML = 'Question ' + pnQuestion + ' of 5'; */
}


container.addEventListener("click", function(event) {
    event.preventDefault();
        
    var element = event.target;

    if (element.matches(".button")) {
        answerSel = element.dataset.number ;

        checkAnswer( questions[curQuestionIndex]['answer'], answerSel);
    }
})

function checkAnswer(pnRightAnswer, pnUserAnswer) {
    // alert(msg);
    if (pnRightAnswer==pnUserAnswer) {
        oResult.innerHTML = "Correct!!"
        oResult.setAttribute("data-result", "Good");
        nCorrect ++;
    } else {
        oResult.innerHTML = "Incorrect"
        oResult.setAttribute("data-result", "Wrong");
        // Penalty for Wrong answer
        nSecondsLeft = nSecondsLeft - 10;
        nCorrect = nCorrect    // Do Nothing
    }

    // 1 second delay
    // 22.08.26 Add "conts myTimeout = ""
    const myTimeout = setTimeout(function(){
        oResult.innerHTML = ""
        oResult.setAttribute("data-result", "None");
        clearTimeout(myTimeout);
    
        // Move to next question
        curQuestionIndex++
        if (curQuestionIndex<5) {
            // Display next question on 
            setElements(curQuestionIndex);   // nCurQuestion);
        } else {
            // End of 5th question
            displayscore(nCorrect)
        }
    }, 1000);
}



function startQuiz() {
    timerStart = setInterval(f_timer, 1000);
    setElements(curQuestionIndex);   
}

start.addEventListener("click", function(event) {
    // start.parentNode.removeChild(start);
    start.setAttribute("data-state", "hidden");
    start.disabled = true;

    // Make buttons visible / and enableing on
    btn1.setAttribute("data-state", "visible");
    btn1.disabled = false;        
    btn2.setAttribute("data-state", "visible");
    btn2.disabled = false;        
    btn3.setAttribute("data-state", "visible");
    btn3.disabled = false;        
    btn4.setAttribute("data-state", "visible");
    btn4.disabled = false;        

    startQuiz();
    // Call startquiz
});




// code kept for future references // 
// =============================== //
// var taskNameInput = document.querySelector('input[name="task-name"]') ;
// console.log(taskNameInput);

// var selectOption = document.querySelector('select[name="task-type"]');


/* /* 22.08.24  9:10
// Start in Page # 1
    container.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches(".button")) {
//    if (element.matches(".button") &&
//        (element.datastate.state=="visible")) {

            // if (element.matches("#start")) {
                    //     alert("Lets star");
                    //     setButtons(start, "")

                    // } else {
                // (element.matches("#option"))

            alert("answer hit");



                    // }



        }


            
    })

 

//}

22.08.24  9:10   */






