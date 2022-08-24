// var taskNameInput = document.querySelector('input[name="task-name"]') ;
// console.log(taskNameInput);

// var selectOption = document.querySelector('select[name="task-type"]');

var Title = document.querySelector(".page-title"); 
var Parg  = document.querySelector(".paragraph");

var container = document.querySelector(".btn-group");   // get position/element for div class="btn-group"
var start = document.querySelector("#start");
var btn1  = document.querySelector("#option1");
var btn2  = document.querySelector("#option2");
var btn3  = document.querySelector("#option3");
var btn4  = document.querySelector("#option4");

/* Variables starting with "np" Numeric-Possition */
// var npPage = 1 ;    
// var npH1   = 2 ;
// var npText = 3 ;
// var npBtn1 = 4 ;
// var npBtn2 = 5 ;
// var npBtn3 = 6 ;
// var npBtn4 = 7 ;
// var npAnsw = 8 ;

// var aPages = [1, "Coding Quiz Challenge", 
// "Try to answer the following code--related questions within the time limit. Keep in mind that incorrect answers will penalize your socre/time by ten seconds",
// "Start Quiz",
// "",
// "",
// "",
// 0]

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
        option3: "3. booleans", 
        option4: "4. all of the above", 
        answer : "4"
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
                    
/*
 function setButtons (fElement, fText) {
     fElement.innerHTML = fText;
     if (fText === "") {
         fElement.setAttribute("data-state", "hidden");
         fElement.disabled = true;
         // fElement.setAttribute("disabled"  , true);
     } else {
         fElement.setAttribute("data-state", "visible");
         fElement.disabled = false;        
//         // fElement.setAttribute("disabled"  , false);
     }
*/


function setElements(pnQuestion) {
    Title.innerHTML=  questions[pnQuestion]['question'];
    Parg.innerHTML =  questions[pnQuestion]['h1'];
    btn1.innerHTML =  questions[pnQuestion]['option1'];
    btn2.innerHTML =  questions[pnQuestion]['option2'];
    btn3.innerHTML =  questions[pnQuestion]['option3'];
    btn4.innerHTML =  questions[pnQuestion]['option4'];
}



function startQuiz() {
    // var nCurQuestion = 1;

    // Make buttons visible / and enableing on
    btn1.setAttribute("data-state", "visible");
    btn1.disabled = false;        
    btn2.setAttribute("data-state", "visible");
    btn2.disabled = false;        
    btn3.setAttribute("data-state", "visible");
    btn3.disabled = false;        
    btn4.setAttribute("data-state", "visible");
    btn4.disabled = false;        

    // Title.innerHTML=  questions[nCurQuestion][question];
    // Parg.innerHTML =  aPages[nIndex+2];

    // for (var loopQuestion = 0;  loopQuestion+=; loopQuestion<=4) {
    setElements(1);   // nCurQuestion);

    container.addEventListener("click", function(event) {
        //event.preventDefault();
        
        var element = event.target;

        if (element.matches(".button")) {
            answerSel = element.dataset.number ;

            var msg = "Correct Answer: " + questions[1]['answer'] + 
            "   User's answer " + answerSel ;

            container.removeEventListener("click");


            // alert( msg) ;

            // setElements(2);   // nCurQuestion);
        }
    })

    setElements(2);   // nCurQuestion);

    container.addEventListener("click", function(event) {
        //event.preventDefault();
        var element = event.target;

        if (element.matches(".button")) {
            answerSel = element.dataset.number ;

            var msg = "Correct Answer: " + questions[2]['answer'] + 
            "   User's answer " + answerSel ;

            //alert( msg) ;


        }
    })

    setElements(3);   // nCurQuestion);

    container.addEventListener("click", function(event) {
        //event.preventDefault();
        var element = event.target;

        if (element.matches(".button")) {
            answerSel = element.dataset.number ;

            var msg = "Correct Answer: " + questions[3]['answer'] + 
            "   User's answer " + answerSel ;

        //    alert( msg) ;
        }
    })
    






    /*
    setButtons(btn1, btn1.innerHTML);
    setButtons(btn2, btn2.innerHTML);
    setButtons(btn3, btn3.innerHTML);
    setButtons(btn4, btn4.innerHTML);
*/


                // {   questionNumber: 1,
                //     question: "Commonly used data types DO NOT include:",
                //     h1: "",
                //     option1: "1. string",
                //     option2: "2. booleans", 
                //     option3: "3. alerts", 
                //     option4: "4. numbers", 
                //     answer : "3"

}





    start.addEventListener("click", function(event) {
        alert("start hit");

        // start.parentNode.removeChild(start);
        start.setAttribute("data-state", "hidden");
        start.disabled = true;


        startQuiz();
        // Call startquiz
    });


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






/* First - failed attempt
nPage     = 1
nTotPages = 10

// var taskNameInput = document.querySelector('input[name="task-name"]') ;
// console.log(taskNameInput);

// var selectOption = document.querySelector('select[name="task-type"]');

var Title = document.querySelector(".page-title"); 
var Parg  = document.querySelector(".paragraph");

var container = document.querySelector(".btn-group");   // get position/element for div class="btn-group"
var btn1  = document.querySelector("#option1");
var btn2  = document.querySelector("#option2");
var btn3  = document.querySelector("#option3");
var btn4  = document.querySelector("#option4");

// Variables starting with "np" Numeric-Possition 
// var npPage = 1 ;    
// var npH1   = 2 ;
// var npText = 3 ;
// var npBtn1 = 4 ;
// var npBtn2 = 5 ;
// var npBtn3 = 6 ;
// var npBtn4 = 7 ;
// var npAnsw = 8 ;

var aPages = [1, "Coding Quiz Challenge", 
"Try to answer the following code--related questions within the time limit. Keep in mind that incorrect answers will penalize your socre/time by ten seconds",
"Start Quiz",
"",
"",
"",
0]


aPages.push(2,  "Commonly used data types DO NOT include:", "",
"1. string", "2. booleans", "3. alerts", "4. numbers", 3)

aPages.push(3,  "The condition in an if / else statement is enclosed within ___:", "",
"1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets", 3)

aPages.push(4,  "Arrays in JavaScript can be used to store ___:", "",
"1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above", 4)

aPages.push(5,  "String values must be enclosed within ___ when being assigned to variables", "",
"1. commas", "2.curly brackets", "3. quotes", "4. parentheses", 3)

aPages.push(6,  "A very useful tool used during edvelopment and debugging for printing content to the debugger is:", "",
"1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log", 4)



// aPages.push(7,  "All done!"
// "1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log", 4)

// aPages.push(6,  "A very useful tool used during edvelopment and debugging for printing content to the debugger is::", "",
// "1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log", 4)
// ============================ 


var nPage = 1;

// aPages[ 0]    //  1
// aPages[ 8]    //  2 
// aPages[16]    //  3
// aPages[24]    //  4
// aPages[32]    //  5
// aPages[40]    //  6


var nIndex = 0;
var lLoop = Boolean(true);


function setButtons (felement, ftext) {
    felement.innerHTML = ftext;
    if (ftext === "") {
        felement.setAttribute("data-state", "hidden");
        felement.disabled = true;
        // felement.setAttribute("disabled"  , true);
    } else {
        felement.setAttribute("data-state", "visible");
        felement.disabled = false;        
        // felement.setAttribute("disabled"  , false);
    }
    //     btn1.disabled = true;
}





    Title.innerHTML=  aPages[nIndex+1];
    Parg.innerHTML =  aPages[nIndex+2];





    setButtons(btn1, aPages[nIndex+3])     // btn1.innerHTML =  aPages[nIndex+3];
    setButtons(btn2, aPages[nIndex+4])     // btn2.innerHTML =  aPages[nIndex+4];
    setButtons(btn3, aPages[nIndex+5])     // btn3.innerHTML =  aPages[nIndex+5];
    setButtons(btn4, aPages[nIndex+6])     // btn4.innerHTML =  aPages[nIndex+6];





    // Start in Page # 1
    container.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches(".button")) {
            alert("button");

            nPage += 1;

            alert("next/current page " + nPage);
        }


        if (nPage<nTotPages) {
            // aPages[ 0]    //  1
            // aPages[ 8]    //  2 
            // aPages[16]    //  3
            // aPages[24]    //  4
            // aPages[32]    //  5
            // aPages[40]    //  6
                    
            nIndex = ((nPage-1)*8);
    
            Title.innerHTML=  aPages[nIndex+1];
            Parg.innerHTML =  aPages[nIndex+2];
        
            setButtons(btn1, aPages[nIndex+3])     // btn1.innerHTML =  aPages[nIndex+3];
            setButtons(btn2, aPages[nIndex+4])     // btn2.innerHTML =  aPages[nIndex+4];
            setButtons(btn3, aPages[nIndex+5])     // btn3.innerHTML =  aPages[nIndex+5];
            setButtons(btn4, aPages[nIndex+6])     // btn4.innerHTML =  aPages[nIndex+6];
               
        }
            
    })


// document.querySelector("#li3").onclick= function(e){
option3.onclick= function(e){    
e.preventDefault();
alert("Button Clicked");

var  lText3 = Boolean(true);

//if (substr(li3.innerHTML,1,5) =="text3") {
if ((option3.innerHTML =="text3") || (option3.innerHTML=="text3 am back!!")) {
    option3.innerHTML ="text changed" ;
} else {
    if (lText3) {
        option3.innerHTML ="text3 am back!!" ;
        lText3 = false ;
    } else {
        option3.innerHTML ="text3" ;
        lText3 = true ;
    }
}


*/