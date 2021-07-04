// If Javascript is enabled, this code will apply 'spoiler-hidden' to all 
// elements of class 'spoiler', graying it out (or however the CSS defines 
// it). The user will be able to click the obscured block to make it 
// visible.
for (var spoiler of document.querySelectorAll(".spoiler")) {
  spoiler.classList.add('spoiler-hidden');
  spoiler.onclick = function() { this.classList.remove('spoiler-hidden'); }  
}

// Optionally, a label can be added immediately before the spoiler element
// to indicate its presence; this makes these labels visible.
for (var label of document.querySelectorAll(".spoiler-label-hidden")) {
  label.classList.remove('spoiler-label-hidden')
  label.onclick = function() {
    this.nextElementSibling.classList.remove('spoiler-hidden');
  }
}