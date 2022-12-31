window.addEventListener('load', () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads button");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d000",
    "#e380e0",
    "#2260a3",
    "#d0d460",
    "#fa4d9bb7",
    "rgb(192, 181, 255)",
    "rgba(215, 37, 221, 0.747)",
    "rgb(111, 34, 255)",
    "rgb(53, 37, 133)"

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
    const bubble = document.createElement("button");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 2s ease';
    bubble.addEventListener('animationend', function(){
      visual.removeChild(this);
    })
  }
});