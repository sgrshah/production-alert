// initialize div
var div = document.createElement("div");
div.id = "vhx-extension-alert";

// initialize header
var header = document.createElement("h1");
header.innerHTML = "You're on Production Fool!";
div.appendChild(header);

// initialize dimiss link
var dismiss = document.createElement("a");
dismiss.href = '#';
dismiss.innerHTML = "Dismiss";
dismiss.addEventListener('click', function(event) {
  event.preventDefault();
  div.style.display = 'none';
});
div.appendChild(dismiss);

//append to document
document.body.appendChild(div);

// re-initialize header
window.setInterval(function(){
  if (div.style.display === 'none'){
    div.style.display = 'block';
  }
}, 180000);
