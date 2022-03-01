const statusDiv= document.querySelector(".game-status");
const resetDiv=document.querySelector(".reset");
const tileDivs= document.querySelectorAll(".tile");

let gameIsLive=true;
let xturn=true;
let winner=null;
const xsymbol='×';
const osymbol='○';
 
const letterToSymbol=(letter)=>letter==='x'?xsymbol:osymbol;

const handleWin=(letter)=>
{
  gameIsLive=false;
      winner=letter;
        statusDiv.innerHTML=`<span>${letterToSymbol(winner)} has won</span>`;
}

 const checkGameStatus=()=>
 {
 
    const topLeft = tileDivs[0].classList[2];
  const topMiddle = tileDivs[1].classList[2];
  const topRight = tileDivs[2].classList[2];
  const middleLeft = tileDivs[3].classList[2];
  const middleMiddle = tileDivs[4].classList[2];
  const middleRight = tileDivs[5].classList[2];
  const bottomLeft = tileDivs[6].classList[2];
  const bottomMiddle = tileDivs[7].classList[2];
  const bottomRight = tileDivs[8].classList[2];


    if (topLeft&& topLeft === topMiddle && topLeft === topRight) 
    {
      handleWin(topLeft);
     
        tileDivs[0].classList.add('won');
        tileDivs[1].classList.add('won');
        tileDivs[2].classList.add('won');
    }
  
      else if (middleLeft&&middleLeft === middleMiddle && middleLeft === middleRight) 
      {
        handleWin(middleLeft);
        tileDivs[3].classList.add('won');
        tileDivs[4].classList.add('won');
        tileDivs[5].classList.add('won');
      } 
      else if (bottomLeft&&bottomLeft === bottomMiddle && bottomLeft === bottomRight) 
      {
        handleWin(bottomLeft);
        tileDivs[6].classList.add('won');
        tileDivs[7].classList.add('won');
        tileDivs[8].classList.add('won');
      }
       else if (topLeft&& topLeft === middleLeft && topLeft === bottomLeft) 
       {
        handleWin(topLeft);
        tileDivs[0].classList.add('won');
        tileDivs[3].classList.add('won');
        tileDivs[6].classList.add('won');
      } 
      else if (topMiddle&& topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        handleWin(topMiddle);
        tileDivs[1].classList.add('won');
        tileDivs[4].classList.add('won');
        tileDivs[7].classList.add('won');
      } 
      else if (topRight&& topRight === middleRight && topRight === bottomRight) {
        handleWin(topRight);
        tileDivs[2].classList.add('won');
        tileDivs[5].classList.add('won');
        tileDivs[8].classList.add('won');
      } 
      else if ( topLeft&&topLeft === middleMiddle && topLeft === bottomRight) 
      {
        handleWin(topLeft);
      
        tileDivs[0].classList.add('won');
        tileDivs[4].classList.add('won');
        tileDivs[8].classList.add('won');
      } 
      else if (topRight&&topRight === middleMiddle && topRight === bottomLeft) {
        handleWin(topRight);
        tileDivs[2].classList.add('won');
        tileDivs[4].classList.add('won');
        tileDivs[6].classList.add('won');
      } 
      else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight)
       {
        gameIsLive = false;
        statusDiv.innerHTML = 'Game is tied!';
      }
       else
        {
        xturn = !xturn;
        if (xturn)
         {
          statusDiv.innerHTML = `${xsymbol} is next`;
        }
         else 
        {
          statusDiv.innerHTML = `<span>${osymbol} is next</span>`;
        }
      }

    };

const handleReset=()=>
{
   xturn=true;
   statusDiv.innerHTML=`${xsymbol} is next`
   winner=null;
   for( const tileDiv of tileDivs)
   {
     tileDiv.classList.remove('x');
     tileDiv.classList.remove('O');
     tileDiv.classList.remove('won');
   }
   gameIsLive=true;

};
const handleTile=(e)=>
{
    const classlist=e.target.classList;
    if(!gameIsLive ||classlist[2]=='x'||classlist[2]=='O')
    {
        return;
    }
    console.log(e.target);
    if(xturn)
    {
        classlist.add('x');
        checkGameStatus();
    }
    else{
    classlist.add('O');
    checkGameStatus();
    }

}
resetDiv.addEventListener("click",handleReset);
for(const tileDiv of tileDivs)
{
    tileDiv.addEventListener('click',handleTile);
}