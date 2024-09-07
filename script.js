let userScore=0;
let compScore=0;

let genComp=()=>{
    let option=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    return option[idx];
}
let msg=document.querySelector(".msg");
let scores=document.querySelector(".score1");
let scoreComp=document.querySelector(".score2");

let draw=()=>{
    msg.innerText="Draw! Play again";
    msg.style.backgroundColor="#081b31"
}
let showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        scores.innerText=userScore;
        msg.innerText=`You win`;
        msg.style.backgroundColor="green";
    }
    else{
        msg.innerText=`You Lose`;
        msg.style.backgroundColor="red"
        compScore++;
        scoreComp.innerText=compScore;
    }
}

let playgame=(userChoice)=>{
    let compChoice=genComp();

    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    } 
};

let choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener('click',() => {
        let userChoice=choice.getAttribute("id");
        playgame(userChoice)
    })
});