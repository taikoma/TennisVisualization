console.log("start!")
var margin=20
var s=20;
var width = 400;
var height = margin+11.89*2*s;//600
var a1=parseInt(d3.select("#cross").attr("value"),10);
var a2=parseInt(d3.select("#center").attr("value"),10);
var a3=parseInt(d3.select("#straight").attr("value"),10);

var numDirection={"cross":a1,"center":a2,"straight":a3};

var totalDirection=numDirection["cross"]+numDirection["center"]+numDirection["straight"]
var perDirection=[Math.round(numDirection["cross"]/totalDirection*100),
                    Math.round(numDirection["center"]/totalDirection*100),
                    Math.round(numDirection["straight"]/totalDirection*100)]

var svg = d3.select("#tennisCourt").attr("width", width).attr("height", height);
var lineScale=0.5
var x1=10;
var y1=10;
svg.append("rect")
          .attr("x",0)
          .attr("y",0)
          .attr("width",margin*2+10.97*s)
          .attr("height",margin*2+11.89*2*s)
          .attr("fill","#2E9AFE");

var dataset1 = [
  [margin, margin],
  [margin+10.97*s, margin],
  [margin+10.97*s, margin+11.89*2*s],
  [margin, margin+11.89*2*s],
  [margin, margin]
];
var dataset2 = [
  [margin, margin+11.89*s],
  [margin+10.97*s, margin+11.89*s],
  [margin+10.97*s-1.37*s, margin+11.89*s],
  [margin+10.97*s-1.37*s, margin],
  [margin+1.37*s, margin],
  [margin+1.37*s, margin+11.89*2*s],
  [margin+10.97*s-1.37*s, margin+11.89*2*s],
  [margin+10.97*s-1.37*s, margin+11.89/2*s],
  [margin+1.37*s, margin+11.89/2*s],
  [margin+1.37*s, margin+11.89*3/2*s],
  [margin+10.97*s-1.37*s, margin+11.89*3/2*s],
  [margin+10.97/2*s, margin+11.89*3/2*s],
  [margin+10.97/2*s, margin+11.89/2*s]
];
var datasetFoCr = [//cross
  [margin+1.37*s+8.23*s*3/4, margin+11.89*2*7/8*s],
  [margin+1.37*s+8.23*s/2, margin+11.89/2*s],
  [margin+1.37*s+8.23*s*1/8, margin+11.89/8*s]
];
var datasetFoCe = [//center
  [margin+1.37*s+8.23*s*3/4, margin+11.89*2*7/8*s],
  [margin+1.37*s+8.23*s*3/4, margin+11.89/2*s],
  [margin+1.37*s+8.23*s/2, margin+11.89/8*s]
];
var datasetFoDo = [//downtheline
  [margin+1.37*s+8.23*s*3/4, margin+11.89*2*7/8*s],
  [margin+1.37*s+8.23*s*7/8, margin+11.89/2*s],
  [margin+1.37*s+8.23*s*7/8, margin+11.89/8*s]
];

//白線 折れ線としてSVGのpath要素を追加
svg.append("path")
  .datum(dataset1)
  .attr("fill", "#0080FF")
  .attr("stroke", "white")
  .attr("stroke-width", 1.5)
  .attr("d", d3.line()
    .x(function(d) { return d[0]; })
    .y(function(d) { return d[1]; }));

svg.append("path")
  .datum(dataset2)
  .attr("fill", "none")
  .attr("stroke", "white")
  .attr("stroke-width", 1.5)
  .attr("d", d3.line()
    .x(function(d) { return d[0]; })
    .y(function(d) { return d[1]; }));

//
svg.append("path")//cross
  .datum(datasetFoCr)
  .attr("fill", "none")
  .attr("stroke", "#FF8C00")
  .attr("stroke-width", lineScale*perDirection[0])
  .attr("id","linecross")
  .attr("d", d3.line()
  .curve(d3.curveBasis)
  .x(function(d) {return d[0];})
  .y(function(d) {return d[1];}));
svg.append("text")
  .attr("text-anchor", "middle")
  .attr("x",margin+1.37*s+8.23*s/8)
  .attr("y",margin-3)//.attr("y",margin+11.89/14*s)
  .attr("fill","white")
  .attr("id","percross")
  .text(perDirection[0]+"%")
svg.append("text")
  .attr("text-anchor", "middle")
  .attr("x",margin+1.37*s+8.23*s/8)
  .attr("y",margin+11.89/14*s)
  .attr("font-size","11")
  .attr("fill","white")
  .attr("id","numcross")
  .text("("+numDirection["cross"]+"/"+totalDirection+")")

svg.append("path")//center
  .datum(datasetFoCe)
  .attr("fill", "none")
  .attr("stroke", "#FF8C00")
  .attr("stroke-width", lineScale*perDirection[1])
  .attr("id","linecenter")
  .attr("d", d3.line()
  .curve(d3.curveBasis)
  .x(function(d) {return d[0];})
  .y(function(d) {return d[1];}));
svg.append("text")
  .attr("text-anchor", "middle")
  .attr("x",margin+1.37*s+8.23*s/2)
  .attr("y",margin-3)
  .attr("fill","white")
  .attr("id","percenter")
  .text(perDirection[1]+"%")
svg.append("text")
  .attr("text-anchor", "middle")
  .attr("x",margin+1.37*s+8.23*s/2)
  .attr("y",margin+11.89/14*s)
  .attr("font-size","11")
  .attr("fill","white")
  .attr("id","numcenter")
  .text("("+numDirection["center"]+"/"+totalDirection+")")

svg.append("path")//downtheline
  .datum(datasetFoDo)
  .attr("fill", "none")
  .attr("stroke", "#FF8C00")
  .attr("stroke-width", lineScale*perDirection[2])
  .attr("id","linestraight")
  .attr("d", d3.line()
  .curve(d3.curveBasis)
  .x(function(d) {return d[0];})
  .y(function(d) {return d[1];}));
svg.append("text")
  .attr("text-anchor", "middle")
  .attr("x",margin+1.37*s+8.23*s*7/8)
  .attr("y",margin-3)
  .text(perDirection[2]+"%")
  .attr("fill","white")
  .attr("id","perstraight")
svg.append("text")
  .attr("text-anchor", "middle")
  .attr("x",margin+1.37*s+8.23*s*7/8)
  .attr("y",margin+11.89/14*s)
  .attr("font-size","11")
  .attr("id","numstraight")
  .attr("fill","white")
  .text("("+numDirection["straight"]+"/"+totalDirection+")")

var inputElems = d3.selectAll("input");

inputElems.on("change", function(){

  console.log(inputElems);

  numDirection[this.name]=parseInt(this.value,10);
  totalDirection=numDirection["cross"]+numDirection["center"]+numDirection["straight"]
  perDirection=[Math.round(numDirection["cross"]/totalDirection*100),
                      Math.round(numDirection["center"]/totalDirection*100),
                      Math.round(numDirection["straight"]/totalDirection*100)]
  svg.selectAll("#linecross")
    .attr("stroke-width",lineScale*perDirection[0])
  svg.selectAll("#linecenter")
    .attr("stroke-width",lineScale*perDirection[1])
  svg.selectAll("#linestraight")
    .attr("stroke-width",lineScale*perDirection[2])

  svg.selectAll("#numcross")
    .text("("+numDirection["cross"]+"/"+totalDirection+")")
  svg.selectAll("#numcenter")
    .text("("+numDirection["center"]+"/"+totalDirection+")")
  svg.selectAll("#numstraight")
    .text("("+numDirection["straight"]+"/"+totalDirection+")")

  svg.selectAll("#percross")
    .text(perDirection[0]+"%")
  svg.selectAll("#percenter")
    .text(perDirection[1]+"%")
  svg.selectAll("#perstraight")
    .text(perDirection[2]+"%")
});
