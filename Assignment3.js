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
var speed;

//global color and point variables
var colors = [];
var points = [];

//global program variables (3)
var programGem5;
var programGem6;
var programGem7;

var drawGem5 = true;
var drawGem6 = false;
var drawGem7 = false;

function drawGem5() 
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

function drawGem6() 
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

function drawGem7() 
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
    //Establish shaders (programs), button, menu, and speed (theta)
    
    render();
}

render = function()
{
    gl.clear(gl.COLOR_BUFFER_BIT);

    //Draw chosen gem (if then statements) using correct shaders and data
}