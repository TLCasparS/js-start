
function getComputerChoice(){


    let pick = Math.floor(Math.random() * 3);
    let choose  = ["rock", "paper", "scissors"];
    let opt = choose[pick];
    console.log(opt);
    return opt;

}
const playerSelection = "paper";
const computerSelection = getComputerChoice();


function playRound(playerSelection,computerSelection){
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    console.log(`player got ${ps} \n Computer got ${cs}`);
    if (ps === cs){
        return "Draw"
    }
    if (ps == "rock"){
        if(cs =="paper"){
            return "Computer wins";
        }
        else{
        return "Player wins";
        }
    }
    if(ps == "paper"){
        if(cs == "scissors"){
        return "Computer wins";
         }else{
            return "player wins"
            }
    }   

   return "no"
}

console.log(playRound(playerSelection, computerSelection));
