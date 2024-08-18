let reset=document.querySelector('#Ani2');
let heading=document.querySelector('#Gandu');
let you=document.querySelector('#Ani');
let comp=document.querySelector('#Ani1');
let button=document.querySelectorAll('.btn')
let pscore=0;
let cscore=0;
reset.addEventListener('click', () => {
    // console.log('Raghav fatty')
    heading.innerText='Rock Paper Scissors';
    you.innerText=0;
    comp.innerText=0;
    pscore=0;
    cscore=0;
});
for(let btn of button){
btn.addEventListener('click', ()=>{
let computerChoice=Math.floor(Math.random()*3);
let playerChoice=btn.name
if(won(computerChoice, playerChoice)==1){
    pscore++;
    you.innerText=pscore;
    heading.innerText='You Won!';
    }else if(won(computerChoice,playerChoice)==0){
        cscore++;
    comp.innerText=cscore;
    heading.innerText='Computer Won!';
}
else{
    heading.innerText='It\'s a tie!';
}
})
}

function won( computer,player,){
    // 0-rock, 1-paper, 2-scissors
    // console.log( player)
    // console.log(computer)
    if(player==computer){
        return -1;
    }
    else if((player==0 && computer==2) || (player==2 && computer==1) || (player==1 && computer==0)){
        return 1;
    }
    else{
        return 0;
    }
}

