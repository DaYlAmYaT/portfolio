document.querySelector('#finger-flip-card')
.addEventListener('click', function() {
  console.log('Card clicked!');
  document.querySelector('#finger-card-inner').classList.toggle('flipped');
});

document.querySelector('#bird-flip-card')
.addEventListener('click', function() {
  console.log('Card clicked!');
  document.querySelector('#bird-card-inner').classList.toggle('flipped');
});