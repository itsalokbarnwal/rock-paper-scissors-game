document.addEventListener("DOMContentLoaded", () => {
    let Naam = prompt("Enter Your Name");
    if (Naam) {
        document.getElementById("naMe").innerText = Naam;
    }

    let userScore = 0;
    let computerScore = 0;

    const choices = document.querySelectorAll(".choice");
    const msgPara = document.querySelector("#msg");
    const userScorePara = document.querySelector("#userScore");
    const computerScorePara = document.querySelector("#compScore");

    const genComputerChoice = () => {
        const options = ["rock", "paper", "scissor"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    }

    const drawGame = () => {
        msgPara.innerText = "Game Draw! Play Again";
        msgPara.style.backgroundColor = "yellow";
    }

    const showWinner = (userWin, userChoice, compChoice) => {
        if (userWin) {
            userScore++;
            userScorePara.innerText = userScore;
            msgPara.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
            msgPara.style.backgroundColor = "green";
        } else {
            computerScore++;
            computerScorePara.innerText = computerScore;
            msgPara.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
            msgPara.style.backgroundColor = "red";
        }
    }

    const playGame = (userChoice) => {
        const compChoice = genComputerChoice();

        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = compChoice === "scissor" ? false : true;
            } else {
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
    }

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });
    });
});
