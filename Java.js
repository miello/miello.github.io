// JavaScript Document

var time;

function settime(){
    time=setTimeout(load, 3000);
}

function enablevideo(){
  document.getElementById("vid").hidden="";
  document.getElementById("tp").hidden="hidden";
  document.getElementById("pre").hidden="hidden";
  document.getElementById("down").hidden="";
}

function load(){
  document.getElementById("tp").hidden="";
  document.getElementById("load").hidden="hidden";
  document.getElementById("pre").hidden="";
}

