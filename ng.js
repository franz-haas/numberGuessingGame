

function sign(value) {
  if (value < 0)
    return '-';
  if (value > 0)
    return '+';
  return '=';
}

function calcGuessResult(gc1, gc2, hintType) {
  switch(hintType) {
  case 0:
    return sign(c1-gc1);
  case 1:
    return sign(c2-gc2);
  case 2:
    return sign(c1+c2-(gc1+gc2));
  case 3:
    return sign(c1-c2-(gc1-gc2));
  }
  alert("Invalid Hint Type: " + hintType);
}


{
  var c1;
  var c2;

  function solution() {
    alert(c1+" "+c2);
  }

  function newGame() {
    c1 = parseInt(c1Scaling * Math.random());
    c2 = parseInt(c2Scaling * Math.random());
    guessesSoFar =  new Array(0);
    paper.clear();
    drawGrid();
  }
  
  function workGuess() {
   g_c1 = parseInt(window.document.NumberGuessing.g_c1.value);
   g_c2 = parseInt(window.document.NumberGuessing.g_c2.value);
    
   workGuessWorker(g_c1, g_c2);
  }

  function workGuessWorker(g_c1, g_c2){
    hintType = parseInt(4 * Math.random());
    if(g_c2 == c2)
      hintType = 0;
    if(g_c1 == c1)
      hintType = 1;
    
    if(g_c1 == c1 &&  g_c2 == c2) {
      alert("Your guess is correct!");
      return;
    }
    guessesSoFar.push({c1:g_c1, c2:g_c2, hintType:hintType, sign: calcGuessResult(g_c1, g_c2, hintType) });
    drawExcludedArea(g_c1, g_c2, hintType);

    guessesSoFar.map(function(item){ paper.circle(item.c1,c2Scaling-item.c2,1);})
  }
}


window.onload = function() {  
  paper = new  Raphael(document.getElementById('canvas_container'), 
                       c1Scaling, c2Scaling);  
  newGame();
}