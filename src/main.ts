const sandboxButton = document.getElementById('sandboxButton');
const puzzlesButton = document.getElementById('puzzlesButton');
const documentationButton = document.getElementById('documentationButton');
const githubButton = document.getElementById('githubButton');

sandboxButton.addEventListener('click', function(){
  window.location.href = "../sandbox/simulation.html";
});

githubButton.addEventListener('click', function(){
  window.location.href = "https://github.com/Bryian1125/kepla";
});
