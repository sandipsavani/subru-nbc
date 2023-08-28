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
  "feature41-html",
  "feature42-html",
  "feature43-html",
  "feature44-html",
  "feature46-html",
  "feature47-html",
  "feature48-html",
  "feature49-html",
];
var c = [
  "feature41-code",
  "feature42-code",
  "feature43-code",
  "feature44-code",
  "feature46-code",
  "feature47-code",
  "feature48-code",
  "feature49-code",
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
