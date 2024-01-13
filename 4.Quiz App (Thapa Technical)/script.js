const quizDB = [{
    question: "Q1: The total number of ministers including the prime ministers shall not exceed ?",
    a: "20% members of the Lok sabha",
    b: "10% members of the Lok sabha",
    c: "25% members of the Lok sabha",
    d: "15% members of the Lok sabha",
    ans: "ans4"
},
{
    question: "Q2: What Is Distance Between Earth And Sun ?",
    a: "148.88 Million KM",
    b: "180.71 Million KM",
    c: "135.15 Million KM",
    d: "120.87 Million KM",
    ans: "ans1"
},
{
    question: "Q3: Earth Take HOw Long To Orbit The Sun ?",
    a: "365 days 4 hour 56min",
    b: "365 days 5 hour 59min",
    c: "365 days 7 hour 16min",
    d: "365 days 9 hour 05min",
    ans: "ans2"
},
{
    question: "Q4: How Long Does It Take The Eart To Complete One Rotation ?",
    a: "23 Hours 51min",
    b: "23 Hours 59min",
    c: "23 Hours 56min",
    d: "24 Hours 00min",
    ans: "ans3"
}]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();
const getCheckAnswer = (curAnsElem) => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;

};
const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}
submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if (checkAnswer === quizDB[questionCount].ans) {
        score++;
    }
    questionCount++

    deselectAll()
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length} ✌</h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `;
        showScore.classList.remove('scoreArea')
    }
}); 