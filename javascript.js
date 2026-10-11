const questionInput = document.getElementById("question");
const askButton = document.getElementById("ask-ai");
const answerBox = document.getElementById("answer");

askButton.addEventListener("click", function (){

    const question = questionInput.value;

    if (question.trim() === "") {
        answerBox.innerText = "Please enter a question first.";
        return;
    }

    let answer = "";

if (question.toLowerCase().includes("javascript")) {
    answer = "You should learn DOM manipulation, events, functions, arrays, and then move to React.js.";
}
else if (question.toLowerCase().includes("python")) {
    answer = "Start with Python basics, functions, lists, dictionaries, OOP, and then learn a framework such as Django or Flask.";
}
else if (question.toLowerCase().includes("frontend")) {
    answer = "For frontend development, learn HTML, CSS, JavaScript, responsive design, Git, and then React.js.";
}
else if (question.toLowerCase().includes("interview")) {
    answer = "Start preparing common technical questions, coding problems, project explanations, and HR questions.";
}
else {
    answer = "Start with the fundamentals, practice regularly, and build practical projects.";
}

answerBox.innerText = answer;
answerBox.innerText = "🤖 CareerMate is thinking...";

setTimeout(function () {
    answerBox.innerText = answer;
}, 5000);

});