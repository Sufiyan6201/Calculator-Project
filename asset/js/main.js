
function Multi() {
  var input = document.getElementById("inputedText").value;
  var input2 = document.getElementById("inputedText2").value;
  total = parseInt(input) * parseInt(input2)
  document.getElementById('result').value = total

}
function Divis() {
  var input = document.getElementById("inputedText").value;
  var input2 = document.getElementById("inputedText2").value;
  total = parseInt(input) / parseInt(input2)
  document.getElementById('result').value = total

}
function Minus() {
  var input = document.getElementById("inputedText").value;
  var input2 = document.getElementById("inputedText2").value;
  total = parseInt(input) - parseInt(input2)
  document.getElementById('result').value = total

}
function Plus() {
  var input = document.getElementById("inputedText").value;
  var input2 = document.getElementById("inputedText2").value;
  total = parseInt(input) + parseInt(input2)
  document.getElementById('result').value = total

}