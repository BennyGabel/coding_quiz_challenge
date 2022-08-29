Acceptance Criteria
=============================
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

# coding_quiz_challenge
link to my project:      https://bennygabel.github.io/coding_quiz_challenge/
link to the repository:  https://github.com/BennyGabel/coding_quiz_challenge/tree/dev2

Including in project:    Screenshot #1.jpg      Start Page
                         Screenshot #2.jpg      Question Page, applies to questions 1-5
                         Screenshot #3.jpg      Score Displayed. Enter Initials. Submit.
                         Screenshot #4.jpg      List of all Scores. Buttons: Go back & Clear scores


# description
Will evaluate user's Javascript knowledge

# Table of Contents
Start Page
Questions and Answers section
Display Users scode

# How to use this project 
As the user open the URL, will have to press a button to start
Once the Start button is clicked:
1) The first question is shown in screen
2) The timer gets instantiated (60 seconds count down)
3) After every response, the website will display in screen if the answer was good or wrong.
4) Every wrong answer, will penalize the user by 10 seconds.
5) If either the user finished the 5th question or runs out of time, will show the final score displayscore()


Technical Aspects
============================================================================================================================================
CSS
--------------------------------------------------------------------------------------------------------------------------------------------
1 By Classes
2 By IDs
3 By custom properties. at the end of the file 
  - [data-state="visible"]
  - [data-state="hidden"] 
  - [data-result="Good"] 
  - [data-result="Wrong"] 
  - [data-result="None"] 

HTML.
--------------------------------------------------------------------------------------------------------------------------------------------
1 questionnaire class DIV
  Compossed by 
  - Start button 
  - Timer             Display remaining seconds
  - Page-title        Displays the test - Question
  - paragraph         If there is any additional information
  - buttons  (to choose answers)
    Custom properties:
    * data-number     Determine what buttopn-option # was clicked
    * data-state      will be visible/hidden, acording value - setups in style.css
  - question_result   Indicate if answer was correct or incorrect
2 showscore     class DIV
  - show socres
  - User initials     
  - Sugmit Button
3 High Score
  - Class high_uScore 
    * Elements in it will be created/removed dynamically
  - Class high_uButtons     Will have two buttons
    * Go Back         Start 
    * Clear Scores
  

Javascript - js     Please note, am explaining the processes and functions in the way how appeared in the program, not in order of execution
--------------------------------------------------------------------------------------------------------------------------------------------
* Assigns elements
* Create an array of all questions

- getAllScore         - Extract all Scores from localStorage
* startAgain.Click    - Start the webpage again
* clearScores.Click   - Empty localStorage.quizScore
                        > remove elements h1 and li from scrteen
                        > h1    page header
                        > li
* displayAllScore     - get all scores 
                      - sort the values by score - descending   (call function sort())
                      - creates
                        > h1    page header
                        > br    break line
                        > li
* saveAddScore        - Extract existing scores
                      - Add current user/score to array
                      - Update information into localStoreage.quizScore
* usrInitials         Call saveAddScore - passes as parameters Name, totalScore
* displayscore()      - Indicates users score
                      - Allow user Enter his initials
                      - Submit button (option) usrInitials
* f_timer()           Computer the seconds left. If all the seconds were used, will call displayscore()
* setElements()       Assigned values to the screen elements. Receive as parameter question #
* Click-EventListener Receive the element/button clicked. 
                      Extract the dataset-number for that button.
                      call function checkAnswer passing: Answer/Button expected and button selected by user.
* checkAnswer         Receives parameters mentioned right above
                      Evaluates Answer Expected vs User's Answer
                      - If correct
                        > Displays "Correct!!" in element oResult
                        > Change attributes: data-result = "Good". 
                        > Attribute-value will display on green background
                      - If incorrect
                        > Displays "Incorrect!!" in element oResult
                        > Change attributes: data-result = "Wrong". 
                        > Attribute-value will display on red background                      
                      - Will be a delay of 1 second, for result to display and will proceed
                        > If it didn't reach the 5th question, will display the following question and continue
                        > If if finished evaluating the 5th question/answer, will go to displayscore()
* startQuiz()         Set/Starts Timer
                      Shows first question
* start-Click-EventListener
                      Wait for the Start Button is clicked
                      - Disable start button and make it invisible
                      - Enable buttons 1,2,3,4 and make it visible
                      Calls startQuiz() 
