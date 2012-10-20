function ai_step(){
  var g_c1 = "unset";
  var g_c2 = "unset";

  var c1 = "dont cheat"
  var c2 = "dont cheat"
  
  try{
    eval(window.document.NumberGuessing.user_algo.value);
  }catch (e){
    alert("your code did not run")
    alert(e.message)
    return;
  }

  if(isNaN(g_c1)){
    alert("g_c1 is not set correctly by your code");
    return;
  }
    
  if(isNaN(g_c2)){
    alert("g_c2 is not set by your code");
    return;
  }

  workGuessWorker(g_c1, g_c2);
}


$(document).ready(function() {  
  $.get("ai_example_descent.js", function(data, b) {
    window.document.NumberGuessing.user_algo.value = data;
  }, 'text')
  canvcont = document.getElementById('canvas_container');
  jQuery(canvcont).ready(function(){
    $(canvcont).click(function(e){
      alert("c1: " + (e.pageX-1-this.offsetLeft) + "; "+
            "c2: " + (c2Scaling-(e.pageY-1-this.offsetTop)));
    }); 
  });
});
