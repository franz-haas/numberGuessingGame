var lowRight = "L"+c1Scaling+  " " +c2Scaling+" ";
var highRight = "L"+c1Scaling+ " 0 ";
var highLeft = "L0 0 ";
var lowLeft = "L0 "+c2Scaling+" ";

function Line(startX, startY, endX, endY, raphael) {
  var start = {
    x: startX,
    y: startY
  };
  var end = {
    x: endX,
    y: endY
  };
  var getPath = function() {
    return "M" + start.x + " " + start.y + " L" + end.x + " " + end.y;
  };
  var redraw = function() {
    node.attr("path", getPath());
  }
  
  var node = raphael.path(getPath());
  return {
    updateStart: function(x, y) {
      start.x = x;
      start.y = y;
      redraw();
      return this;
    },
    updateEnd: function(x, y) {
      end.x = x;
      end.y = y;
      redraw();
      return this;
    }
  };
};

function drawExcludedArea(g_c1,g_c2,hintType)
{
  var startX;
  var startY;
  var endX;
  var endY;
  var path;
  var gRes = calcGuessResult(g_c1, g_c2, hintType);

  g_c1=g_c1;
  g_c2=g_c2;
  
  switch(hintType) {
  case 0:
    startX = g_c1;
    startY = 0;
    endX = g_c1;
    endY = c2Scaling;
    if(gRes=='+')
      path = paper.path("M "+startX+" "+startY+
                        "L"+endX+" "+endY+ 
                        lowLeft + highLeft);
    else
      path = paper.path("M "+startX+" "+startY+
                        "L"+endX+" "+endY+ 
                        lowRight + highRight);
      break;
  case 1:
    startX = 0;
    startY = c2Scaling-g_c2;
    endX = c1Scaling;
    endY = c2Scaling-g_c2;
    if(gRes=='+')
      path = paper.path("M "+startX+" "+startY+
                        "L"+endX+" "+endY+ 
                        lowRight + lowLeft);
    else
      path = paper.path("M "+startX+" "+startY+
                        "L"+endX+" "+endY+
                        highRight + highLeft);

    break;
  case 2:
    startX = g_c1+g_c2;
    startY = c2Scaling;
    endX = 0;
    endY = c2Scaling-(g_c1+g_c2);
    if(gRes=='+')
      path = paper.path("M "+startX+" "+startY+
                        "L"+endX+" "+endY+ 
                        lowLeft + lowRight);
    else
      path = paper.path("M "+startX+" "+startY+
                        "L"+endX+" "+endY+ 
                        highLeft + highRight + lowRight);
    break;
  case 3:
    startX = 0;
    startY = c2Scaling-(g_c2-g_c1);
    endX = c1Scaling;
    endY = c2Scaling-(g_c2-g_c1+c1Scaling);

    if(gRes=='+')
      path = paper.path("M "+startX+" "+startY+"L"+endX+" "+endY+ highRight + highLeft);
    else
      path = paper.path("M "+startX+" "+startY+"L"+endX+" "+endY+ lowRight + lowLeft);
    break;
  }
  path.attr({fill: '#9cf', 'stroke-width': 0});
}

function drawGrid(){
  // var markers = [10,20,30,40,50,60,70,80,90];
  // markers.map(function(i) {
  //   Line(i,0,i,c2Scaling, paper);
  //   Line(0,i,c2Scaling,i, paper);
  // })
}
