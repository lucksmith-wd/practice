const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

input.addEventListener("input", (e) => {
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
});

const updateThrottleText = throttle((text) => {
  throttleText.textContent = text;
});

function debounce(cb, delay = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttle(cb, interval = 500) {
  let lastTime = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - lastTime < interval) return;
    lastTime = now;
    cb(...args);
  };
}
