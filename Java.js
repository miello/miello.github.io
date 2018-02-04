// JavaScript Document

var time;

function settime(){
    time=setTimeout(load, 10000);
}

function enablevideo(){
  document.getElementById("vid").hidden="";
  document.getElementById("tp").hidden="hidden";
  document.getElementById("pre").hidden="hidden";
  document.getElementById("down").hidden="";
  document.getElementById("post").hidden="";
}

function load(){
  document.getElementById("tp").hidden="";
  document.getElementById("load").hidden="hidden";
  document.getElementById("pre").hidden="";
  document.getElementById("head").hidden="";
}


