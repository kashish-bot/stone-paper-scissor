let userScore = 0;
let coumputerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");

const drawGame = () => {
    console.log("Game was draw");
     msg.innerText = "Game Draw !"
     msg.style.backgroundColor = "rgb(0, 12, 48)";
};

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win !");
        msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    } else {
        coumputerScore++;
        compScorepara.innerText = coumputerScore;
        console.log("You Lose");
         msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`
         msg.style.backgroundColor = "red";
    }
}

const getcomchoice = () => {
    const options = ["Stone" , "Paper" , "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
};

const playGame = (userChoice) => {
    console.log("user-choice =" , userChoice);
    const compChoice = getcomchoice();
    console.log("computer-score =" , compChoice);
    if ( userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true; 
        if (userChoice === "Stone") {
            userWin = compChoice === "Paper" ? false : true;
        } else if ( userChoice === "Paper") {
            userWin = compChoice === "Scissor" ? false : true;
        } else {
            userWin = compChoice === "Stone" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});
