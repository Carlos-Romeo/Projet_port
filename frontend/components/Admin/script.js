function updateDate() {
  var today = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var dateString = today.toLocaleDateString('en-US', options);
  document.getElementById('date').innerHTML = dateString;
}
updateDate();
setInterval(updateDate, 1000);
const deleteButton = document.getElementById('deleteButton');
const noteText = document.getElementById('noteText');
const savedNote = localStorage.getItem('note');
if (savedNote) {
  noteText.value = savedNote;
}
deleteButton.addEventListener('click', function() {
  noteText.value = '';
  localStorage.removeItem('note');
});

noteText.addEventListener('input', function() {
  localStorage.setItem('note', noteText.value);
});
