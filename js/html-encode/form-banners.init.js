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
  "form1-html",
  "form2-html",
  "form3-html",
  "form4-html",
  "form5-html",
  "form6-html",
  "form7-html",
  "form8-html",
  "form9-html",
];
var c = [
  "form1-code",
  "form2-code",
  "form3-code",
  "form4-code",
  "form5-code",
  "form6-code",
  "form7-code",
  "form8-code",
  "form9-code",
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
