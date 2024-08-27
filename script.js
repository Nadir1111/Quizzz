const change = document.querySelector(".change");
const btn = document.querySelector(".holder_link");
const title = document.querySelector(".holder_question");
const variantElements = document.querySelectorAll(".holder_variant");
const questions = [
    {
        answer: 2,
        question: "1. How many football teams in the Premier League?",
        variants: [18, 19, 20, 21],
    },
    {
        answer: 0,
        question: "2. Who is the all-time Premier League top goal scorer?",
        variants: [
            "Robbie Fowler",
            "Harry Kane",
            "Wayne Rooney",
            "Jermain Defoe",
        ],
    },
    {
        answer: 1,
        question:
            "3. Which country has played the most matches in the World Cup finals?",
        variants: ["Italy", "Germany", "Brazil", "Argentina"],
    },
    {
        answer: 3,
        question: "4. What is the biggest football stadium in Europe?",
        variants: [
            "Wembley",
            "Estadio Santiago Bernabeu",
            "Allianz Arena",
            "Camp Nou",
        ],
    },
    {
        answer: 3,
        question:
            "5. Who was the first goalkeeper to score in the Premier League?",
        variants: [
            "David de Gea",
            "Petr Cech",
            "Edwin van der Sar",
            "Peter Schmeichel",
        ],
    },
    {
        answer: 0,
        question:
            '6. In which World Cup did Diego Maradona score his infamous "Hand of God" goal?',
        variants: ["1986", "1982", "1990", "1994"],
    },
    {
        answer: 2,
        question: "7. Who has scored the most goals in the World Cup?",
        variants: [
            "Ronaldo (Brazil)",
            "Ronaldo (Portugal)",
            "Miroslav Klose",
            "Gerd Muller",
        ],
    },
    {
        answer: 2,
        question:
            "8. Ronaldo is synonymous with the No.7, but what other number did he wear at Real Madrid?",
        variants: ["11", "96", "9", "28"],
    },
];
let currentIndex = 0;
const loadQuestion = () => {
    const currentQuestion = questions[currentIndex];
    title.innerText = currentQuestion.question;
    variantElements.forEach((variant, index) => {
        variant.innerText = currentQuestion.variants[index];
        variant.style.backgroundColor = "";
    });
    change.innerText = currentIndex + 1;
};
const handleVariantClick = (index) => {
    const currentQuestion = questions[currentIndex];
    variantElements.forEach((variant, idx) => {
        variant.style.backgroundColor =
            idx === currentQuestion.answer ? "#109e10" : "#fa5c5c";
    });
};
btn.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    }
});
variantElements.forEach((variant, index) => {
    variant.addEventListener("click", () => handleVariantClick(index));
});
loadQuestion();
