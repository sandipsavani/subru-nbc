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
var a = ["feature1-html", "feature2-html", "feature3-html", "feature4-html", "feature5-html", "feature6-html", "feature7-html", "feature8-html", "feature9-html", "feature10-html"];
var c = ["feature1-code", "feature2-code", "feature3-code", "feature4-code", "feature5-code", "feature6-code", "feature7-code", "feature8-code", "feature9-code", "feature10-code"];

function elem(ea) {
  return document.getElementById(ea).innerHTML;
}

for (var i = 0; i < a.length; i++) {
  var m = elem(a[i]);
  var b = m.split(">");
  var replaceBracket = i == b.length - 1 ? "" : "";
  document.getElementById(c[i]).textContent += m + replaceBracket + " \r\n";
}
