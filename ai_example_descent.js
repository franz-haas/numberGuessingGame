var stepSize = 1+parseInt(10 * Math.random());
var idx = guessesSoFar.length-1;
g_c1 = parseInt(c1Scaling * Math.random());
g_c2 = parseInt(c2Scaling * Math.random());
if(idx>=0){
  var lastGuess = guessesSoFar[idx];
  var signValue = 1;
  g_c1 = lastGuess.c1;
  g_c2 = lastGuess.c2;
  if(lastGuess.sign=="-")
    signValue = -1;
  switch(lastGuess.hintType){
  case 0:
    g_c1+=stepSize*signValue;
    break;
  case 1:
    g_c2+=stepSize*signValue;
    break;
  case 2:
    g_c1+= parseInt(Math.sqrt(stepSize))*signValue;
    g_c2+= parseInt(Math.sqrt(stepSize))*signValue;
    break;
  case 3:
    g_c1+= parseInt(Math.sqrt(stepSize))*signValue;
    g_c2-= parseInt(Math.sqrt(stepSize))*signValue;
    break;
  } 
}

