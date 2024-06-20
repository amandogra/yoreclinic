const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.25, , 0.5, 0.75, 1, 0],
};

const  observer = new IntersectionObserver(handleIntersect, options);

function handleIntersect(entries) {
  entries.forEach((entry) => {
    console.log(entry.intersectionRatio);
    if (entry.intersectionRatio === 0) {
      document.querySelectorAll(".opacity-on-scroll").forEach((item) => {
        item.style.opacity = 1;
      });
    } else if (entry.intersectionRatio === 0.5) {
      document.querySelectorAll(".opacity-on-scroll").forEach((item) => {
        item.style.opacity = 0;
      });
    }
  });
}

window.addEventListener("load", createObserver, false);
