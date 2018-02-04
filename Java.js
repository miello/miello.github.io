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

window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
    //document.onkeydown = function(e) {
      // "F12" key
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };



