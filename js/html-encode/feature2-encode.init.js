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
var a = ["feature11-html", "feature12-html", "feature13-html", "feature14-html", "feature15-html", "feature16-html", "feature17-html", "feature18-html", "feature19-html", "feature20-html"];
var c = ["feature11-code", "feature12-code", "feature13-code", "feature14-code", "feature15-code", "feature16-code", "feature17-code", "feature18-code", "feature19-code", "feature20-code"];

function elem(ea) {
  return document.getElementById(ea).innerHTML;
}

for (var i = 0; i < a.length; i++) {
  var m = elem(a[i]);
  var b = m.split(">");
  var replaceBracket = i == b.length - 1 ? "" : "";
  document.getElementById(c[i]).textContent += m + replaceBracket + " \r\n";
}
