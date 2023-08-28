// var text = document.querySelector("#btn-general-html").innerHTML;

// function showHTML(text) {
//   var map = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&#039;",
//   };

//   return text.replace(/[&<>"']/g, function (m) {
//     return map[m];
//   });
// }
// document.querySelector("#btn-general-code").innerHTML =  showHTML(text);
var a = [
  "static-slider1-html",
  "static-slider2-html",
  "static-slider3-html",
  "static-slider4-html",
  "static-slider5-html",
  "static-slider6-html",
  "static-slider7-html",
  "static-slider8-html",
  "static-slider9-html",
  "static-slider10-html",
];
var c = [
  "static-slider1-code",
  "static-slider2-code",
  "static-slider3-code",
  "static-slider4-code",
  "static-slider5-code",
  "static-slider6-code",
  "static-slider7-code",
  "static-slider8-code",
  "static-slider9-code",
  "static-slider10-code",
];

function elem(ea) {
  return document.getElementById(ea).innerHTML;
}

for (var i = 0; i < a.length; i++) {
  var m = elem(a[i]);
  var b = m.split(">");
  var replaceBracket = i == b.length - 1 ? "" : "";
  document.getElementById(c[i]).textContent += m + replaceBracket + " \r\n";
}