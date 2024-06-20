// TODO: Add functionality to scale and fade the logo on scroll 
// const content = document.querySelector(".logo");
// document.addEventListener("scroll", () => {
//   // Calculate the scale value based on the scroll position
//   const scrollTop = window.scrollY;
//   console.log(scrollTop);
//   const viewportHeight = window.visualViewport.height;
//   let scaleValue = Math.ceil(viewportHeight/scrollTop);
//   console.log('>', scaleValue);
//   // Apply the scaling to the content
//   content.style.transform = `scale(${scaleValue})`;
//   content.style.opacity = `scale(${scaleValue}transform)`;
// });

// An Intersection Observer to show hide the menu bar
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//       console.log(entry.target);
//     if(entry.isIntersecting) {
//       entry.target.classList.add('visible');
//     } else {
//       entry.target.classList.remove('visible');
//     }
//   });
// });
//
// const targetList = document.querySelectorAll('.hidden')
//
// targetList.forEach((target) => observer.observe(target));
