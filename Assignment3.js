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
var canvas;
var gl;

//global rotation variables
//global color variables
//gloabal shape variables (3)
//global program variables (3)

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
    //vertices for 5 sided gem
    //vertices for 6 sided gem
    //vertices for 7 sided gem
    //Establish shaders (programs), button, menu, color slider, and speed (theta)
    
    render();
}

function render()
{
    gl.clear(gl.COLOR_BUFFER_BIT);

    //Draw chosen gem (if then statements) using correct shaders and data
}