window.addEventListener('load', () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d000",
    "#e380e0",
    "#2260a3",
    "#d0d460",
    "#f1aaca",
    "#afb1c0",
  ];

  // Sounds here //

  pads.forEach((pad, index) =>{
    pad.addEventListener('click', function(){
        sounds[index].currentTime = 0;
        sounds[index].play();

        createBubbles(index);
    });
  });

  // Create function that makes bubbles //
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function(){
      visual.removeChild(this);
    })
  }
});