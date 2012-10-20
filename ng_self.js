
$(document).ready(function (){
  canvcont = document.getElementById('canvas_container');

  jQuery(canvcont).ready(function(){
    $(canvcont).click(function(e){
      window.document.NumberGuessing.g_c1.value = e.pageX-1-this.offsetLeft;
      window.document.NumberGuessing.g_c2.value = c2Scaling-(e.pageY-1-this.offsetTop);
    });
  });
})

function workGuess() {
  g_c1 = parseInt(window.document.NumberGuessing.g_c1.value);
  g_c2 = parseInt(window.document.NumberGuessing.g_c2.value);
  
    if(isNaN(g_c1)){
      alert("g_c1 is not set correctly");
      return;
    }
    
  if(isNaN(g_c2)){
    alert("g_c2 is not set correctly");
    return;
  }
  
  workGuessWorker(g_c1, g_c2);
}
