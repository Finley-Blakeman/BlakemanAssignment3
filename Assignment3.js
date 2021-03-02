/* 
Author: Finley Blakeman
   Date: 3/1/2021
   Description: This program creates a gem with the amount of sides specified by the user (through
     a menu). The gem's color can be changed using the slider and the gem will rotate when the "rotate"
     button is pressed by the user. 
   Proposed Points, 9: This program is animated, has at least 2 colors, utilizes a button, three sliders, 
     and a menu,and has 3 vertex shaders (one for each gem option).
*/

"use strict";

// global variables
var render, canvas, gl;

//global rotation variables
var theta = 0.0;
var thetaLoc;
var moveGem = false;

//global color and point variables
var colors = [];
var points = [];

//global program variables (3)
var programGem5;
var programGem6;
var programGem7;

var drawGem5 = true;
var drawGem6 = false;

function loadGem5() 
{
  points = [
    vec2(0, 0),
    vec2(0, 0.75),
    vec2(0.75, 0),
    vec2(0.5, -0.75),
    vec2(-0.5, -0.75),
    vec2(-0.75, 0),
    vec2(0, 0.75)
  ]

  var r, b, g;

  document.getElementById("redSlider").onchange = function(event) {
    r = event.target.value;
  };

  document.getElementById("blueNearSlider").onchange = function(event) {
    b = event.target.value;
  };

  document.getElementById("greenSlider").onchange = function(event) {
    g = event.target.value;
  };

  colors = [
    vec3(1.0, 1.0, 1.0),
    vec3(r, b, g, 0.8),
    vec3(r, b, g, 0.9),
    vec3(r, b, g, 0.8),
    vec3(r, b, g, 0.7),
    vec3(r, b, g, 0.6),
    vec3(r, b, g, 0.5),
    vec3(r, b, g, 0.6),
    vec3(r, b, g, 0.7)
  ]

  var bufferId = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW)

  var positionLoc = gl.getAttribLocation(programGem5, "aPosition");
  gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(positionLoc);
}

function loadGem6() 
{
  points = [
    vec2(0, 0),
    vec2(0.5, 0.75),
    vec2(0.75, 0),
    vec2(0.5, -0.75),
    vec2(-0.5, -0.75),
    vec2(-0.75, 0),
    vec2(-0.5, 0.75),
    vec2(0.5, 0.75)
  ]

  var r, b, g;

  document.getElementById("redSlider").onchange = function(event) {
    r = event.target.value;
  };

  document.getElementById("blueNearSlider").onchange = function(event) {
    b = event.target.value;
  };

  document.getElementById("greenSlider").onchange = function(event) {
    g = event.target.value;
  };

  colors = [
    vec3(1.0, 1.0, 1.0),
    vec3(r, b, g, 0.8),
    vec3(r, b, g, 0.9),
    vec3(r, b, g, 0.8),
    vec3(r, b, g, 0.7),
    vec3(r, b, g, 0.6),
    vec3(r, b, g, 0.5),
    vec3(r, b, g, 0.6),
    vec3(r, b, g, 0.7)
  ]

  var bufferId = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW)

  var positionLoc = gl.getAttribLocation(programGem5, "aPosition");
  gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(positionLoc);
}

function loadGem7() 
{
  points = [
    vec2(0, 0),
    vec2(0, 0.75),
    vec2(0.6, 0.5),
    vec2(0.75, 0),
    vec2(0.5, -0.5),
    vec2(-0.5, -0.5),
    vec2(0.75, 0),
    vec2(-0.6, 0.5),
    vec2(0, 0.75)
  ]
  
  var r, b, g;

  document.getElementById("redSlider").onchange = function(event) {
    r = event.target.value;
  };

  document.getElementById("blueNearSlider").onchange = function(event) {
    b = event.target.value;
  };

  document.getElementById("greenSlider").onchange = function(event) {
    g = event.target.value;
  };

  colors = [
    vec3(1.0, 1.0, 1.0),
    vec3(r, b, g, 0.8),
    vec3(r, b, g, 0.9),
    vec3(r, b, g, 0.8),
    vec3(r, b, g, 0.7),
    vec3(r, b, g, 0.6),
    vec3(r, b, g, 0.5),
    vec3(r, b, g, 0.6),
    vec3(r, b, g, 0.7)
  ]

  var bufferId = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW)

  var positionLoc = gl.getAttribLocation(programGem5, "aPosition");
  gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(positionLoc);
}

window.onload = function init()
{
  //Set up webpage
  canvas = document.getElementById("gl-canvas");
  gl = canvas.getContext('webgl2');
  if(!gl) alert("WebGL 2.0 isn't available");
  

  //Configure background of canvas
  gl.viewport(0, 0, canvas.Width, canvas.height);
  gl.clearColor(0.8, 0.8, 0.8, 1.0);


  //Load Shaders and initialize attribute buffers
  programGem5 = initShaders(gl, "vertex-shader-5", "fragment-shader");
  gl.useProgram(programGem5);


  //Starting the program with the 5-sided gem loaded on the screen
  loadGem5();


  //Establish shaders (programs), button, menu, and thetaLoc

  //Establish shaders (programs)
  programGem5 = initShaders(gl, "vertex-shader-5", "fragment-shader");
  programGem6 = initShaders(gl, "vertex-shader-6", "fragment-shader");
  programGem7 = initShaders(gl, "vertex-shader-7", "fragment-shader");

  //Establish thetaLoc
  thetaLoc = gl.getUniformLocation(programGem5, "utheta");

  //Establish "Gem Menu" Menu
  document.getElementById("Choose A Gem" ).onclick = function(event) 
  {
    switch( event.target.index ) 
    {
      case 0:
        console.debug("5-Sided Gem")
        drawGem5 = true;
        drawGem6 = false;
        loadGem5();
        break;
      case 1:
        console.debug("6-Sided Gem")
        drawGem5 = false;
        drawGem6 = true;
        loadGem6();
        break;
      case 2:
        console.debug("7-Sided Gem")
        drawGem5 = false;
        drawGem6 = false;
        loadGem7();
        break;
    }
  };

  //Establish "Move Gem" Button
  document.getElementById("Move Gem").onclick = function() 
  {
    console.log("pressed button");
    moveGem = !moveGem;
  }

  render();
}

render = function()
{
  gl.clear(gl.COLOR_BUFFER_BIT);


  //Draw chosen gem (if then statements) using correct shaders and data
  requestAnimationFrame(render);
}