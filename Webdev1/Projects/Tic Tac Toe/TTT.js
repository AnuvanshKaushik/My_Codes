reset=document.querySelector('#Btn');
cells=document.querySelectorAll('.cell');
heading=document.querySelector('#heading');
reset.addEventListener('click', () => {
  heading.innerText='Tic Tac Toe';
  for(let c of cells) {
    c.innerText="";
}})
let turn=0;
for(let c of cells) {
c.addEventListener('click', () => {
  if(c.innerText!=""){
    return;          //Break the current
    }
  if(turn==0){
    c.innerText="0";
    turn=1;
  }
  else{
    c.innerText="X";
    turn=0;
  }
  checkWin();  //Call the function to check for win condition after each move.  //This function checks if any player has won or if the game is a tie.  If a player wins or a tie, it displays the appropriate message.  If no one has won, it continues to the next move.  This function is called in the click event listener for each cell.  If a player wins or a tie, the game stops and no further moves are allowed.  If no
})
}

function checkWin() {
    let cells=Array.from(document.querySelectorAll('.cell'));
    let lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];
    for(let i of lines){
        let a =cells[i[0]].innerText;
        let b =cells[i[1]].innerText;
        let c =cells[i[2]].innerText;
        console.log(a,b,c);
        if (a !== "" && a === b && b === c) {
        if(a=='0'){
            heading.innerText='Player 1 Wins!';
            return;
        }
        else if(a=='X'){
            heading.innerText='Player 2 Wins!';
            return;
        }
    }
        else if(cells.every(cell => cell.innerText!="")){
            heading.innerText='It\'s a tie!';
            return;
        }
    }
}
