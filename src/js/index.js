let progressBar = document.querySelector(".progress-bar");
let progressValue = document.querySelector(".progress-value");
let startValue = 0,
  endValue = 30,
  speed = 100;

let progress = setInterval(() => {
  startValue++;

  progressValue.textContent = `${startValue}%`;
  progressBar.style.background = `conic-gradient(#cb38d3 ${
    startValue * 3.6
  }deg , #ededed 0deg)`; 
  

  if (startValue == endValue) {
    clearInterval(progress);
  }
}, speed);
