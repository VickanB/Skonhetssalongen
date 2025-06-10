document.getElementById('kontaktform').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Tack för ditt meddelande! Vi återkommer snart.');
  this.reset();
});
