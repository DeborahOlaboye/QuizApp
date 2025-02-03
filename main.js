const questions = [
    {
        question: 'What is HTML?',
        answers: ['HTML describes the structure of a webpage', 
            'HTML is the standard markup language mainly used to create web pages',
            'HTML consists of a set of elements that helps the browser how to view the content',
            'All of the mentioned'],
        correctAnswer: 'All of the mentioned'
    },
    {
        question: 'Who is the father of HTML?',
        answers: ['Rasmus Lerdorf',
            'Tim Berners-Lee',
            'Brendan Eich',
            'Sergey Brin'],
        correctAnswer: 'Tim Berners-Lee'
    },
    {
        question: 'HTML stands for __________',
        answers: ['HyperText Markup Language',
            'HyperText Machine Language',
            'HyperText Marking Language',
            'HighText Marking Language'],
        correctAnswer: 'HyperText Markup Language'
    },
    {
        question: 'What is the correct syntax of doctype in HTML5?',
        answers: ['</doctype html>',
            '<doctype html>',
            '<doctype html!>',
            '<!doctype html>'],
        correctAnswer: '<!doctype html>' 
    },
    {
        question: 'Which of the following is used to read an HTML page and render it?',
        answers: ['Web server',
            'Web network',
            'Web browser',
            'Web matrix'],
        correctAnswer: 'Web browser'
    },
    {
        question: 'Which of the following is not a difference between HTML and XHTML?',
        answers: ['Charset in both html and xhtml is “text/html”', 
            'Tags and attributes are case-insensitive in HTML but not in XHTML',
            'Special characters must be escaped using character entities in XHTML unlike HTML',
            'Charset in html is “text/html” where as in xhtml it is “application/xml+xhtml”'],
        correctAnswer: 'Charset in both html and xhtml is “text/html”'
    },
    {
        question: 'Which of the following tag is used for inserting the largest heading in HTML?',
        answers: ['head',
            '<h1>',
            '<h6>',
            'heading'],
        correctAnswer: '<h1>'
    },
    {
        question: 'What is DOM in HTML?',
        answers: ['Language dependent application programming',
            'Hierarchy of objects in ASP.NET',
            'Application programming interface',
            'Convention for representing and interacting with objects in html documents'],
        correctAnswer: 'Convention for representing and interacting with objects in html documents'
    },
    {
        question: 'In which part of the HTML metadata is contained?',
        answers: ['head tag',
            'title tag',
            'html tag',
            'body tag'],
        correctAnswer: 'head tag'
    },
    {
        question: 'Which element is used to get highlighted text in HTML5?',
        answers: ['<u>',
            '<mark>',
            '<highlight>',
            '<b>'],
        correctAnswer: '<mark>'
    },
    {
        question: 'Which of the following is not a HTML5 tag?',
        answers: ['<track>', 
            '<video>',
            '<slider>',
            '<source>'],
        correctAnswer: '<video>'
    },
    {
        question: 'How do we write comments in HTML?',
        answers: ['</…….>',
            '<!……>',
            '</……/>',
            '<…….!>'],
        correctAnswer: '<!……>'
    },
    {
        question: 'Which of the following elements in HTML5 defines video or movie content?',
        answers: ['<video>',
            '<movie>',
            '<audio>',
            '<media>'],
        correctAnswer: '<video>'
    },
    {
        question: 'Which of the following is not the element associated with the HTML table layout?',
        answers: ['alignment',
            'color',
            'size',
            'spanning'],
        correctAnswer: 'color'
    },
    {
        question: 'Which element is used for or styling HTML5 layout?',
        answers: ['CSS',
            'jQuery',
            'JavaScript',
            'PHP'],
        correctAnswer: 'CSS'
    },
    {
        question: 'Which HTML tag is used for making character appearance bold?',
        answers: ['<u>content</u>', 
            '<b>content</b>',
            '<br>content</br>',
            '<i>content</i>'],
        correctAnswer: '<b>content</b>'
    },
    {
        question: 'Which HTML tag is used to insert an image?',
        answers: ['<img url=”htmllogo.jpg” />',
            '<img alt=”htmllogo.jpg” />',
            '<img src=”htmllogo.jpg” />',
            '<img link=”htmllogo.jpg” />'],
        correctAnswer: '<img src=”htmllogo.jpg” />'
    },
    {
        question: 'HTML is a subset of ___________',
        answers: [' SGMT',
            ' SGML',
            ' SGME',
            'XHTML'],
        correctAnswer: ' SGML'
    },
    {
        question: 'Which character is used to represent when a tag is closed in HTML?',
        answers: ['#',
            '!',
            '/',
            '\\'],
        correctAnswer: '/'
    },
    {
        question: 'Among the following, which is the HTML paragraph tag?',
        answers: ['<p>',
            '<pre>',
            '<hr>',
            '<a>'],
        correctAnswer: '<p>'
    },
    {
        question: 'In HTML, which attribute is used to create a link that opens in a new window tab?',
        answers: ['src=”_blank”', 
            'alt=”_blank”',
            'target=”_self',
            'target=”_blank”'],
        correctAnswer: 'target=”_blank”'
    },
    {
        question: 'Which HTML element is used for short quote?',
        answers: ['<em>',
            '<abbr>',
            '<q>',
            '<blockquote>'],
        correctAnswer: '<q>'
    },
    {
        question: ' Which of the following HTML tag is used to create an unordered list?',
        answers: ['<ol>',
            '<ul>',
            '<li>',
            '<ll>'],
        correctAnswer: '<ul>'
    },
    {
        question: 'Which HTML element is used for abbreviation or acronym?',
        answers: ['<abbr>',
            '<blockquote>',
            '<q>',
            '<em>'],
        correctAnswer: '<abbr>'
    },
    {
        question: 'Which of the following HTML tag is used to add a row in a table?',
        answers: ['<th>',
            '<td>',
            '<tr>',
            '<tt>'],
        correctAnswer: '<tr>'
    },
    {
        question: 'What is the work of <address> element in HTML5?',
        answers: ['contains IP address', 
            'contains home address',
            'contains url',
            'contains contact details for author'],
        correctAnswer: 'contains contact details for author'
    },
    {
        question: 'Which of the following tag is used to create a text area in HTML Form?',
        answers: ['<textarea> </textarea>',
            '<text></text>',
            '<input type=”text” />',
            '<input type=”textarea” />'],
        correctAnswer: '<textarea> </textarea>'
    },
    {
        question: 'To show deleted text, which HTML element is used?',
        answers: ['<del>',
            '<em>',
            '<strong>',
            '<ins>'],
        correctAnswer: '<del>'
    },
    {
        question: 'What is the correct syntax of web address?',
        answers: ['port://domain.filenmae:path/scheme/prefix',
            'prefix://scheme.port:domain/filename/path',
            'path://prefix.port:domain/filename/scheme',
            'scheme://prefix.domain:port/path/filename'],
        correctAnswer: 'scheme://prefix.domain:port/path/filename'
    },
    {
        question: 'Which tag is used to create a dropdown in HTML Form?',
        answers: ['input>',
            '<select>',
            '<text>',
            ' <textarea>'],
        correctAnswer: '<select>'
    },
    {
        question: 'Which tag is used to create a numbered list in HTML?',
        answers: ['<ol>', 
            '<ul>',
            '<li>',
            '<ll>'],
        correctAnswer: '<ol>'
    },
    {
        question: 'How to create a checkbox in HTML Form?',
        answers: ['<input type=”text”>',
            '<input type=”textarea”>',
            '<input type=”checkbox”>',
            '<input type=”button”>'],
        correctAnswer: '<input type=”checkbox”>'
    },
    {
        question: 'Which of the following extension is used to save an HTML file?',
        answers: ['.hl',
            '.h',
            '.htl',
            '.html'],
        correctAnswer: '.html'
    },
    {
        question: 'Which tag is used to create a blank line in HTML?',
        answers: ['<b>',
            '<br>',
            '<em>',
            '<a>'],
        correctAnswer: '<br>'
    },
    {
        question: 'Which HTML tag is used to convert the plain text into italic format?',
        answers: ['<b>',
            '<p>',
            '<i>',
            '<a>'],
        correctAnswer: '<a>'
    },
    {
        question: 'What is the use of <hr/> tag in HTML?',
        answers: ['For making content appearance italics', 
            'To create vertical rule between sections',
            'To create a line break',
            'To create horizontal rule between sections'],
        correctAnswer: 'To create horizontal rule between sections'
    },
    {
        question: 'Which attribute is not essential under <iframe>?',
        answers: ['frameborder',
            'width',
            'height',
            'src'],
        correctAnswer: 'frameborder'
    },
    {
        question: 'Which works similar to <b> element?',
        answers: ['<blockquote>',
            '<strong>',
            '<em>',
            '<i>'],
        correctAnswer: '<strong>'
    },
    {
        question: 'Which tag is used to underline the text in HTML?',
        answers: ['<p>',
            '<u>',
            '<i>',
            '<ul>'],
        correctAnswer: '<u>'
    },
    {
        question: 'Which attribute specifies a unique alphanumeric identifier to be associated with an element?',
        answers: ['type',
            'article',
            'id',
            'class'],
        correctAnswer: 'id'
    },
    {
        question: 'Which of the following is an HTML specification used to add more information to HTML tags?',
        answers: ['Modifydata', 
            'Minidata',
            'Macrodata',
            'Microdata'],
        correctAnswer: 'Microdata'
    },
    {
        question: 'Which HTML element is used for YouTube videos?',
        answers: ['<samp>',
            '<small>',
            '<frame>',
            '<iframe>'],
        correctAnswer: '<iframe>'
    },
    {
        question: 'Which of the following HTML element is used for canvas graphics?',
        answers: ['<css>',
            '<paint>',
            '<canvas>',
            '<graphic>'],
        correctAnswer: '<canvas>'
    },
    {
        question: 'The correct sequence of HTML tags for starting a webpage is ?',
        answers: ['Head, Title, HTML, body',
            'HTML, Body, Title, Head',
            'HTML, Head, Title, Body',
            'HTML, Head, Title, Body'],
        correctAnswer: 'HTML, Head, Title, Body'
    },
    {
        question: 'Which of the following tag is used for inserting the largest heading in HTML?',
        answers: ['<h3>',
            '<h1>',
            '<h5>',
            '<h6>'],
        correctAnswer: '<h1>'
    },
    {
        question: 'What is HTML?',
        answers: ['HTML describes the structure of a webpage', 
            'HTML is the standard markup language mainly used to create web pages',
            'HTML consists of a set of elements that helps the browser how to view the content',
            'All of the mentioned'],
        correctAnswer: 'All of the mentioned'
    },
    {
        question: 'Who is the father of HTML?',
        answers: ['Rasmus Lerdorf',
            'Tim Berners-Lee',
            'Brendan Eich',
            'Sergey Brin'],
        correctAnswer: 'Tim Berners-Lee'
    },
    {
        question: 'HTML stands for __________',
        answers: ['HyperText Markup Language',
            'HyperText Machine Language',
            'HyperText Marking Language',
            'HighText Marking Language'],
        correctAnswer: 'HyperText Markup Language'
    },
    {
        question: 'Who is the father of HTML?',
        answers: ['Rasmus Lerdorf',
            'Tim Berners-Lee',
            'Brendan Eich',
            'Sergey Brin'],
        correctAnswer: 'Tim Berners-Lee'
    },
    {
        question: 'HTML stands for __________',
        answers: ['HyperText Markup Language',
            'HyperText Machine Language',
            'HyperText Marking Language',
            'HighText Marking Language'],
        correctAnswer: 'HyperText Markup Language'
    },
];

const questionText = document.querySelector(".question_text");
const answerContainer = document.querySelector(".answers");
const questionNumber = document.querySelector(".question_number");
const feedback = document.querySelector(".feedback");
const userAnswers = []; 
let userScore = 0;

let currentQuestionIndex = 0;

function loadQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    
    questionNumber.textContent = `${currentQuestionIndex + 1}`;
    questionText.textContent = currentQuestion.question;
    feedback.textContent = "";

    answerContainer.innerHTML = "";

    // Loop through answers
    currentQuestion.answers.forEach(answer => {
        let label = document.createElement("label");
        label.style.display = "block";
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = answer;

        // Check if user already selected an answer
        if (userAnswers[currentQuestionIndex] === answer) {
            input.checked = true;
        }

        // Store user answer on change
        input.addEventListener("change", (e) => {
            userAnswers[currentQuestionIndex] = e.target.value;
            checkAnswer();
        });

        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + answer));
        answerContainer.appendChild(label);
    });
}

function checkAnswer() {
    let selectedAnswer = document.querySelector("input[name='answer']:checked");

    if (!selectedAnswer) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "red";
        return false;
    }

    let correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer.value === correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        userScore++;
    } else {
        feedback.textContent = `Wrong! The correct answer is: ${correctAnswer}`;
        feedback.style.color = "red";
    }

    userAnswers[currentQuestionIndex] = selectedAnswer.value;
    return true;
}



// Event Listeners for buttons
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("next")) {
        checkAnswer(); 

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            setTimeout(loadQuestion, 1000);
        } else {
            setTimeout(() => {
                alert(`Quiz completed! Your final score is ${userScore}/${questions.length}`);
                window.location.reload();
            }, 1000);
        }
    }

    if (event.target.classList.contains("previous")) {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();

            // Restore previous answer selection
            document.querySelectorAll("input[name='answer']").forEach(input => {
                if (input.value === userAnswers[currentQuestionIndex]) {
                    input.checked = true;
                }
            });
        }
    }
});

document.querySelector(".quit").addEventListener("click", () => {
    if (confirm("Are you sure you want to quit the quiz?")) {
        document.querySelector(".quiz_container").style.display = "none";
        document.querySelector(".welcome").style.display = "block";
    }
});

document.querySelector(".proceed").addEventListener("click", function() {
    document.querySelector(".welcome").style.display = "none";
    document.querySelector(".quiz_rules").style.display = "block";
});

document.querySelector(".accept").addEventListener("click", function() {
    document.querySelector(".quiz_rules").style.display = "none";
    document.querySelector(".quiz_start").style.display = "block";
});

document.querySelector(".start").addEventListener("click", function() {
    document.querySelector(".quiz_start").style.display = "none";
    document.querySelector(".quiz_container").style.display = "block"; 
});



document.addEventListener("DOMContentLoaded", loadQuestion);


let storedTime = localStorage.getItem("quizTimer");
let totalTime = storedTime !== null ? parseInt(storedTime) : 30 * 60; 
let timer; 
let score = 0;

function startGlobalTimer() {
    clearInterval(timer); 

    timer = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(timer);
            endQuiz();
            return;
        }

        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        // Check if element exists before updating
        let timeElement = document.querySelector(".time");
        if (timeElement) {
            timeElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }

        totalTime--; 

        // Save updated time in localStorage
        localStorage.setItem("quizTimer", totalTime);

    }, 1000);
}

function endQuiz() {
    alert("Time's up! Submitting quiz...");
    localStorage.removeItem("quizTimer"); 
}


// Ensure timer starts when the start quiz button is clicked
document.querySelector(".start").addEventListener("click", function() {
    loadQuestion(); 
    startGlobalTimer();
});

// Reset the timer when the user quits or navigates away
window.addEventListener("beforeunload", () => {
    localStorage.removeItem("quizTimer");
});
