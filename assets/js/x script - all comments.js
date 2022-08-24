
// if (ncurPage != null) {
//     nPage         = ncurPage;
// } else {
//     var nPage     = 1;
//     var ncurPage  = 1;
// }


// var taskNameInput = document.querySelector('input[name="task-name"]') ;
// console.log(taskNameInput);

// var selectOption = document.querySelector('select[name="task-type"]');

var Title = document.querySelector(".page-title"); 
var Parg  = document.querySelector(".paragraph");

var container = document.querySelector(".btn-group");   // get position/element for div class="btn-group"
var start = document.querySelector("#start");
// var btn1  = document.querySelector("#option1");
// var btn2  = document.querySelector("#option2");
// var btn3  = document.querySelector("#option3");
// var btn4  = document.querySelector("#option4");

/* Variables starting with "np" Numeric-Possition */
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
    
    
    
  

 aPages.push(5,  , "",
    "1.", "2.", "3.", "4. parentheses", 3)
    
    
*/    





/*
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
*/


// aPages.push(7,  "All done!"
// "1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log", 4)

// aPages.push(6,  "A very useful tool used during edvelopment and debugging for printing content to the debugger is::", "",
// "1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log", 4)
// ============================ 
// /*

// var nPage = 1;
// let nPage = 1;

// aPages[ 0]    //  1
// aPages[ 8]    //  2 
// aPages[16]    //  3
// aPages[24]    //  4
// aPages[32]    //  5
// aPages[40]    //  6





///// comments
//currentquestionnumber = array of questions[index]
/*for(var i =0;currentquestionnumber.choices.length; i++) {
    choice = currentquestionnumber.choices[i]
    createbutton = document.creatElement('button')
    createbutton.setattribute('data-number', choice)

    append choices
}

function answerClick(event) {
    if (data-number matches (correct answer) {
        penalize time
        show if its correct or incorrect
        
    })
}
*/

///// comments 

var nIndex = 0;
var lLoop = Boolean(true);


function setButtons (fElement, fText) {
    fElement.innerHTML = fText;
    if (fText === "") {
        fElement.setAttribute("data-state", "hidden");
        fElement.disabled = true;
        // fElement.setAttribute("disabled"  , true);
    } else {
        fElement.setAttribute("data-state", "visible");
        fElement.disabled = false;        
        // fElement.setAttribute("disabled"  , false);
    }
    //     btn1.disabled = true;
}


// while (lLoop) {




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
                    // if (element.matches("#start")) {
                    //     alert("Lets star");
                    //     setButtons(start, "")

                    // } else {
                // (element.matches("#option"))

            alert("button");

            nPage += 1;
            // ncurPage = nPage;

            alert("next/current page " + nPage);
                    // }


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
    

        }


            
    })


//}

/*
    if (nPage=1) {  
        // Page 1 has default captions 

        btn1.innerHTML ="text3 am back!!" ;
        btn1.onclick= function(e){

            for ( nPage = 2; nPage<=nTotPages; nPage++)
            {
                alert("Page #2");                
                break;

            }


        

    } else if ((nPage>=2) && (nPage<=7)) {

    }


        
  
    //document.write(''The value of the variable is: '' +i+ ''<br/>''); 

































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


}
*/