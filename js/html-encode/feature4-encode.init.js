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
var a = ["feature31-html", "feature32-html", "feature33-html", "feature34-html", "feature35-html", "feature36-html", "feature37-html", "feature38-html", "feature39-html", "feature40-html"];
var c = ["feature31-code", "feature32-code", "feature33-code", "feature34-code", "feature35-code", "feature36-code", "feature37-code", "feature38-code", "feature39-code", "feature40-code"];

function elem(ea) {
  return document.getElementById(ea).innerHTML;
}

for (var i = 0; i < a.length; i++) {
  var m = elem(a[i]);
  var b = m.split(">");
  var replaceBracket = i == b.length - 1 ? "" : "";
  document.getElementById(c[i]).textContent += m + replaceBracket + " \r\n";
}