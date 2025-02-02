const messages = [
    "Are you sure?",
    "Really sure??",
    "u ceriuss?",
    "peyiss bubub",
    "pikirin lagi cayang",
    "u jahat",
    "CAYANG JAHATT",
    "cayang ihhh",
    "ywdh",
    "becanda cayang, say yes pleasee!❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}