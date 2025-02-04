const questions = [
    {
        "question": "What is JavaScript?",
        "answers": [
            "a) JavaScript is a scripting language used to make the website interactive",
            "b) JavaScript is an assembly language used to make the website interactive",
            "c) JavaScript is a compiled language used to make the website interactive",
            "d) None of the mentioned"
        ],
        "correctAnswer": "a\nExplanation: JavaScript is a scripting language used along with HTML and CSS to make the website interactive along. It is used both on the client-side and server-side."
    },
    {
        "question": "Which of the following is correct about JavaScript?",
        "answers": [
            "a) JavaScript is an Object-Based language",
            "b) JavaScript is Assembly-language",
            "c) JavaScript is an Object-Oriented language",
            "d) JavaScript is a High-level language"
        ],
        "correctAnswer": "a\nExplanation: Although JavaScript is not an OOP (Object-Oriented Programming) language like Java or PHP, it is object based language. The standard threesome of polymorphism, encapsulation, and inheritance are the criteria for object orientation, and JavaScript fails to meet them."
    },
    {
        "question": "Among the given statements, which statement defines closures in JavaScript?",
        "answers": [
            "a) JavaScript is a function that is enclosed with references to its inner function scope",
            "b) JavaScript is a function that is enclosed with references to its lexical environment",
            "c) JavaScript is a function that is enclosed with the object to its inner function scope",
            "d) None of the mentioned"
        ],
        "correctAnswer": "b\nExplanation: A closure is a function that is enclosed with references to its lexical environment. A closure allows an inner function to access the scope of an outside function. Closures are formed every time a function is created in JavaScript, during function creation time."
    },
    {
        "question": "Arrays in JavaScript are defined by which of the following statements?",
        "answers": [
            "a) It is an ordered list of values",
            "b) It is an ordered list of objects",
            "c) It is an ordered list of string",
            "d) It is an ordered list of functions"
        ],
        "correctAnswer": "a\nExplanation: An array in JavaScript is an ordered list of values, each value is referred to as an element, and it is identified by an index. An array can include values of many sorts and the length of an array dynamically sized."
    },
    {
        "question": "a) false",
        "answers": [
            "b) true",
            "c) compilation error",
            "d) runtime error"
        ],
        "correctAnswer": "a\nExplanation: A === operator in JS is only true if the operands are of the same type and the contents match. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions. In this case, we are comparing an integer and a string so it will be false."
    },
    {
        "question": "Which of the following is not javascript data types?",
        "answers": [
            "a) Null type",
            "b) Undefined type",
            "c) Number type",
            "d) All of the mentioned"
        ],
        "correctAnswer": "d\nExplanation: JavaScript is a dynamic, loosely typed language. Variables in JavaScript aren’t tied to any specific value type, and each variable can be assigned and reassigned to values of all the types."
    },
    {
        "question": "Where is Client-side JavaScript code is embedded within HTML documents?",
        "answers": [
            "a) A URL that uses the special javascript:code",
            "b) A URL that uses the special javascript:protocol",
            "c) A URL that uses the special javascript:encoding",
            "d) A URL that uses the special javascript:stack"
        ],
        "correctAnswer": "b\nExplanation: The Client-side JavaScript code is embedded within HTML documents in four ways : \n\nInline, between a pair of “script” tags \nFrom an external file specified by the src attribute of a “script” tag \nIn an HTML event handler attribute, such as onclick or onmouseover \nIn a URL that uses the special javascript: protocol."
    },
    {
        "question": "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        "answers": [
            "a) Position",
            "b) Window",
            "c) Standard",
            "d) Location"
        ],
        "correctAnswer": "b\nExplanation: All client-side JavaScript features and APIs are accessed through the Window object. It represents a web browser window or frame, and the identifier window can be used to refer to it."
    },
    {
        "question": "Which of the following can be used to call a JavaScript Code Snippet?",
        "answers": [
            "a) Function/Method",
            "b) Preprocessor",
            "c) Triggering Event",
            "d) RMI"
        ],
        "correctAnswer": "a\nExplanation: A function call to the element on which JavaScript is to be run can be used to invoke JavaScript code. Other techniques include onclick, onload, and onsubmit, among others."
    },
    {
        "question": "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
        "answers": [
            "a) will work perfectly well on a Windows Machine",
            "b) will be displayed as JavaScript text on the browser",
            "c) will throw errors and exceptions",
            "d) must be restricted to a Unix Machine only"
        ],
        "correctAnswer": "a\nExplanation: Because JS can run on a variety of operating systems, an application written for UNIX will run just as well on Windows."
    },
    {
        "question": "Which of the following scoping type does JavaScript use?",
        "answers": [
            "a) Sequential",
            "b) Segmental",
            "c) Lexical",
            "d) Literal"
        ],
        "correctAnswer": "c\nExplanation: JavaScript, like most current programming languages, employs lexical scoping. This means that functions are performed with the variable scope in effect when they were defined, rather than the variable scope in effect when they are invoked."
    },
    {
        "question": "What is the basic difference between JavaScript and Java?",
        "answers": [
            "a) Functions are considered as fields",
            "b) Functions are values, and there is no hard distinction between methods and fields",
            "c) Variables are specific",
            "d) There is no difference"
        ],
        "correctAnswer": "b\nExplanation: Java is an object-oriented programming language, while JS is an object-oriented scripting language. The main difference between JavaScript and Java is that functions are values, while methods and fields are not clearly defined."
    },
    {
        "question": "Why JavaScript Engine is needed?",
        "answers": [
            "a) Both Compiling & Interpreting the JavaScript",
            "b) Parsing the javascript",
            "c) Interpreting the JavaScript",
            "d) Compiling the JavaScript"
        ],
        "correctAnswer": "c\nExplanation: For the most part, the JS Engine is used to interpret JavaScript. It’s used to parse javascript and run it on a web page."
    },
    {
        "question": "Which of the following methods/operation does javascript use instead of == and !=?",
        "answers": [
            "a) JavaScript uses equalto()",
            "b) JavaScript uses equals() and notequals() instead",
            "c) JavaScript uses bitwise checking",
            "d) JavaScript uses === and !== instead"
        ],
        "correctAnswer": "d\nExplanation: The comma operator, bitwise operators, and the ++ and — operators are not included in the subset. It also forbids the usage of == and!= due to the type conversion they do, instead requiring the use of === and!==."
    },
    {
        "question": "Why event handlers is needed in JS?",
        "answers": [
            "a) Allows JavaScript code to alter the",
            "of windows",
            "b) Adds innerHTML page to the code",
            "c) Change the server location",
            "d) Performs handling of exceptions and occurrences"
        ],
        "correctAnswer": "a\nExplanation: JS code can change the behavior of windows, documents, and the elements that make up those documents via event handlers."
    },
    {
        "question": "Which of the following is not a framework?",
        "answers": [
            "a) JavaScript .NET",
            "b) JavaScript",
            "c) Cocoa JS",
            "d) jQuery"
        ],
        "correctAnswer": "b\nExplanation: jQuery, which is used in web development, is one of the most popular frameworks. JavaScript is a scripting language, not a framework, in this case."
    },
    {
        "question": "Which of the following is the property that is triggered in response to JS errors?",
        "answers": [
            "a) onclick",
            "b) onerror",
            "c) onmessage",
            "d) onexception"
        ],
        "correctAnswer": "b\nExplanation: The Window object’s onerror property acts as an event handler, and it is triggered when JavaScript problems occur. However, because it is called with various arguments, it isn’t a genuine event handler."
    },
    {
        "question": "Which of the following is not an error in JavaScript?",
        "answers": [
            "a) Missing of Bracket",
            "b) Division by zero",
            "c) Syntax error",
            "d) Missing of semicolons"
        ],
        "correctAnswer": "b\nExplanation: In JavaScript, division by zero does not result in an error; it just returns infinity or negative infinity. However, because zero divided by zero has no well-defined value, the result of this operation is the unusual not-a-number value, which is written as NaN."
    },  
    {
        "question": "Who developed Python Programming Language?",
        "answers": [
            "a) Wick van Rossum",
            "b) Rasmus Lerdorf",
            "c) Guido van Rossum",
            "d) Niene Stom"
        ],
        "correctAnswer": "c\nExplanation: Python language is designed by a Dutch programmer Guido van Rossum in the Netherlands."
    },
    {
        "question": "Which type of Programming does Python support?",
        "answers": [
            "a) object-oriented programming",
            "b) structured programming",
            "c) functional programming",
            "d) all of the mentioned"
        ],
        "correctAnswer": "d\nExplanation: Python is an interpreted programming language, which supports object-oriented, structured, and functional programming."
    },
    {
        "question": "Is Python case sensitive when dealing with identifiers?",
        "answers": [
            "a) no",
            "b) yes",
            "c) machine dependent",
            "d) none of the mentioned"
        ],
        "correctAnswer": "b\nExplanation: Case is always significant while dealing with identifiers in python."
    },
    {
        "question": "Which of the following is the correct extension of the Python file?",
        "answers": [
            "a) .python",
            "b) .pl",
            "c) .py",
            "d) .p"
        ],
        "correctAnswer": "c\nExplanation: ‘.py’ is the correct extension of the Python file. Python programs can be written in any text editor. To save these programs we need to save in files with file extension ‘.py’."
    },
    {
        "question": "Is Python code compiled or interpreted?",
        "answers": [
            "a) Python code is both compiled and interpreted",
            "b) Python code is neither compiled nor interpreted",
            "c) Python code is only compiled",
            "d) Python code is only interpreted"
        ],
        "correctAnswer": "a\nExplanation: Many languages have been implemented using both compilers and interpreters, including C, Pascal, and Python."
    },
    {
        "question": "All keywords in Python are in _________",
        "answers": [
            "a) Capitalized",
            "b) lower case",
            "c) UPPER CASE",
            "d) None of the mentioned"
        ],
        "correctAnswer": "d\nExplanation: True, False and None are capitalized while the others are in lower case."
    },
    {
        "question": "Which of the following is used to define a block of code in Python language?",
        "answers": [
            "a) Indentation",
            "b) Key",
            "c) Brackets",
            "d) All of the mentioned"
        ],
        "correctAnswer": "a\nExplanation: In Python, to define a block of code we use indentation. Indentation refers to whitespaces at the beginning of the line."
    },
    {
        "question": "Which keyword is used for function in Python language?",
        "answers": [
            "a) Function",
            "b) def",
            "c) Fun",
            "d) Define"
        ],
        "correctAnswer": "b\nExplanation: The def keyword is used to create, (or define) a function in python."
    },
    {
        "question": "Which of the following character is used to give single-line comments in Python?",
        "answers": [
            "a) //",
            "b) #",
            "c) !",
            "d) /*"
        ],
        "correctAnswer": "b\nExplanation: To write single-line comments in Python use the Hash character (#) at the beginning of the line. It is also called number sign or pound sign. To write multi-line comments, close the text between triple quotes.\nExample: “”” comment\ntext “””"
    },
    {
        "question": "Which of the following functions can help us to find the version of python that we are currently working on?",
        "answers": [
            "a) sys.version(1)",
            "b) sys.version(0)",
            "c) sys.version()",
            "d) sys.version"
        ],
        "correctAnswer": "d\nExplanation: The function sys.version can help us to find the version of python that we are currently working on. It also contains information on the build number and compiler used. For example, 3.5.2, 2.7.3 etc. this function also returns the current date, time, bits etc along with the version."
    },
    {
        "question": "Python supports the creation of anonymous functions at runtime, using a construct called __________",
        "answers": [
            "a) pi",
            "b) anonymous",
            "c) lambda",
            "d) none of the mentioned"
        ],
        "correctAnswer": "c\nExplanation: Python supports the creation of anonymous functions (i.e. functions that are not bound to a name) at runtime, using a construct called lambda. Lambda functions are restricted to a single expression. They can be used wherever normal functions can be used."
    },
    {
        "question": "What is the order of precedence in python?",
        "answers": [
            "a) Exponential, Parentheses, Multiplication, Division, Addition, Subtraction",
            "b) Exponential, Parentheses, Division, Multiplication, Addition, Subtraction",
            "c) Parentheses, Exponential, Multiplication, Addition, Division, Subtraction",
            "d) Parentheses, Exponential, Multiplication, Division, Addition, Subtraction"
        ],
        "correctAnswer": "d\nExplanation: For order of precedence, just remember this PEMDAS (similar to BODMAS)."
    },
    {
        "question": "What does pip stand for python?",
        "answers": [
            "a) Pip Installs Python",
            "b) Pip Installs Packages",
            "c) Preferred Installer Program",
            "d) All of the mentioned"
        ],
        "correctAnswer": "c\nExplanation: pip is a package manager for python. Which is also called Preferred Installer Program."
    },
    {
        "question": "Which of the following is true for variable names in Python?",
        "answers": [
            "a) underscore and ampersand are the only two special characters allowed",
            "b) unlimited length",
            "c) all private members must have leading and trailing underscores",
            "d) none of the mentioned"
        ],
        "correctAnswer": "b\nExplanation: Variable names can be of any length."
    },
    {
        "question": "Which of the following is the truncation division operator in Python?",
        "answers": [
            "a) |",
            "b) //",
            "c) /",
            "d) %"
        ],
        "correctAnswer": "b\nExplanation: // is the operator for truncation division. It is called so because it returns only the integer part of the quotient, truncating the decimal part. For example: 20//3 = 6."
    },
    {
        "question": "Which of the following functions is a built-in function in python?",
        "answers": [
            "a) factorial()",
            "b) print()",
            "c) seed()",
            "d) sqrt()"
        ],
        "correctAnswer": "b\nExplanation: The function seed is a function which is present in the random module. The functions sqrt and factorial are a part of the math module. The print function is a built-in function which prints a value directly to the system output."
    },
    {
        "question": "Which of the following is the use of id() function in python?",
        "answers": [
            "a) Every object doesn’t have a unique id",
            "b) Id  returns the identity of the object",
            "c) All of the mentioned",
            "d) None of the mentioned"
        ],
        "correctAnswer": "b\nExplanation: Each object in Python has a unique id. The id() function returns the object’s id."
    },
    {
        "question": "Which of the following is not a core data type in Python programming?",
        "answers": [
            "a) Tuples",
            "b) Lists",
            "c) Class",
            "d) Dictionary"
        ],
        "correctAnswer": "c\nExplanation: Class is a user-defined data type."
    },
    {
        "question": "Which of these is the definition for packages in Python?",
        "answers": [
            "a) A set of main modules",
            "b) A folder of python modules",
            "c) A number of files containing Python definitions and statements",
            "d) A set of programs making use of Python modules"
        ],
        "correctAnswer": "b\nExplanation: A folder of python programs is called as a package of modules."
    },
    {
        "question": "What is the order of namespaces in which Python looks for an identifier?",
        "answers": [
            "a) Python first searches the built-in namespace, then the global namespace and finally the local namespace",
            "b) Python first searches the built-in namespace, then the local namespace and finally the global namespace",
            "c) Python first searches the local namespace, then the global namespace and finally the built-in namespace",
            "d) Python first searches the global namespace, then the local namespace and finally the built-in namespace"
        ],
        "correctAnswer": "c\nExplanation: Python first searches for the local, then the global and finally the built-in namespace."
    },
    {
        "question": "Which one of the following is not a keyword in Python language?",
        "answers": [
            "a) pass",
            "b) eval",
            "c) assert",
            "d) nonlocal"
        ],
        "correctAnswer": "b\nExplanation: eval can be used as a variable."
    },
    {
        "question": "Which module in the python standard library parses answers received from the command line?",
        "answers": [
            "a) getarg",
            "b) getopt",
            "c) main",
            "d) os"
        ],
        "correctAnswer": "b\nExplanation: getopt parses answers received from the command line."
    },
    {
        "question": "What arithmetic operators cannot be used with strings in Python?",
        "answers": [
            "a) *",
            "b) –",
            "c) +",
            "d) All of the mentioned"
        ],
        "correctAnswer": "b\nExplanation: + is used to concatenate and * is used to multiply strings."
    },
    {
        "question": "Which of the following statements is used to create an empty set in Python?",
        "answers": [
            "a) ( )",
            "b) [ ]",
            "c) { }",
            "d) set()"
        ],
        "correctAnswer": "d\nExplanation: { } creates a dictionary not a set. Only set() creates an empty set."
    },
    {
        "question": "To add a new element to a list we use which Python command?",
        "answers": [
            "a) list1.addEnd(5)",
            "b) list1.addLast(5)",
            "c) list1.append(5)",
            "d) list1.add(5)"
        ],
        "correctAnswer": "c\nExplanation: We use the function append to add an element to the list."
    },
    {
        "question": "Which one of the following is the use of function in python?",
        "answers": [
            "a) Functions don’t provide better modularity for your application",
            "b) you can’t also create your own functions",
            "c) Functions are reusable pieces of programs",
            "d) All of the mentioned"
        ],
        "correctAnswer": "c\nExplanation: Functions are reusable pieces of programs. They allow you to give a name to a block of statements, allowing you to run that block using the specified name anywhere in your program and any number of times."
    },
    {
        "question": "What is the maximum possible length of an identifier in Python?",
        "answers": [
            "a) 79 characters",
            "b) 31 characters",
            "c) 63 characters",
            "d) none of the mentioned"
        ],
        "correctAnswer": "d\nExplanation: Identifiers can be of any length."
    },
    {
        "question": "What are the two main types of functions in Python?",
        "answers": [
            "a) System function",
            "b) Custom function",
            "c) Built-in function & User defined function",
            "d) User function"
        ],
        "correctAnswer": "c\nExplanation: Built-in functions and user defined ones. The built-in functions are part of the Python language. Examples are: dir(), len() or abs(). The user defined functions are functions created with the def keyword."
    },
    {
        "question": "Which of the following is a Python tuple?",
        "answers": [
            "a) {1, 2, 3}",
            "b) {}",
            "c) [1, 2, 3]",
            "d) (1, 2, 3)"
        ],
        "correctAnswer": "d\nExplanation: Tuples are represented with round brackets."
    },
    {
        "question": "Which of the following is a feature of Python DocString?",
        "answers": [
            "a) In Python all functions should have a docstring",
            "b) Docstrings can be accessed by the __doc__ attribute on objects",
            "c) It provides a convenient way of associating documentation with Python modules, functions, classes, and methods",
            "d) All of the mentioned"
        ],
        "correctAnswer": "d\nExplanation: Python has a nifty feature called documentation strings, usually referred to by its shorter name docstrings. DocStrings are an important tool that you should make use of since it helps to document the program better and makes it easier to understand."
    },
    {
        "question": "What is output of print(math.pow(3, 2))?",
        "answers": [
            "a) 9.0",
            "b) None",
            "c) 9",
            "d) None of the mentioned"
        ],
        "correctAnswer": "a\nExplanation: math.pow() returns a floating point number."
    },
    {
        "question": "Which of the following is the use of id() function in python?",
        "answers": [
            "a) Every object in Python doesn’t have a unique id",
            "b) In Python Id function returns the identity of the object",
            "c) None of the mentioned",
            "d) All of the mentioned"
        ],
        "correctAnswer": "b\nExplanation: Each object in Python has a unique id. The id() function returns the object’s id."
    },
    {
        "question": "The process of pickling in Python includes ____________",
        "answers": [
            "a) conversion of a Python object hierarchy into byte stream",
            "b) conversion of a datatable into a list",
            "c) conversion of a byte stream into Python object hierarchy",
            "d) conversion of a list into a datatable"
        ],
        "correctAnswer": "a\nExplanation: Pickling is the process of serializing a Python object, that is, conversion of a Python object hierarchy into a byte stream. The reverse of this process is known as unpickling."
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
