const button = document.getElementById('shiverBtn');
const box = document.getElementById('rectangle');
let lastUpdate = 0;
document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  
    
  
  const rect = button.getBoundingClientRect();
  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;
  const dist = Math.hypot(e.clientX - btnX, e.clientY - btnY);
  if (now - lastUpdate > 200) {
  const intensity = Math.max(0, 1200 - dist); // closer = higher intensity
  console.log(intensity)
  if(intensity > 0){
    button.style.animation = `shiver ${Math.max(0.001, 1/(intensity/500))}s infinite`;
  } else {
    button.style.animation = 'none';
  }
  lastUpdate = now;
  }
});

button.addEventListener('mouseenter', function(){
const maxX = box.clientWidth - button.offsetWidth;
const maxY = box.clientHeight - button.offsetHeight;
const newX = Math.floor(Math.random() * maxX);
const newY = Math.floor(Math.random() * maxY);

button.style.left = newX +'px';
button.style.top = newY + 'px';

});

