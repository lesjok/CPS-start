const menuButton = document.getElementById('btn');
const popup = document.getElementById('popup');
const btnClose = document.getElementById('btn-close')
menuButton.onclick = function() {
  popup.style.display = 'block';
}
btnClose.onclick = function() {
  popup.style.display = 'none';
}