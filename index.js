let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
/*
  shapes.forEach((shape) => {
    const isOdd = shape.dataset.odd === "true";
    const speed = isOdd ? 0.5 : 1;
    shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });   
      */

  /* Alternative for loop implementation 

  for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    const isOdd = i % 2 === 1;
    const speed = isOdd ? -1 : 1;
    shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  }    */

  for (let i = 0; i < shapes.length; i++) {
    const shape = document.querySelectorAll(".shape");
    const isOdd = i % 2 !== 0;
    const speed = isOdd ? -1 : 1;
    console.log("shape", shape," isOdd ", isOdd, " speed ", speed);
    shape[i].style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  }


}




function toggleContrast() {
  contrastToggle = !contrastToggle;

  if (contrastToggle) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}


function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");

  emailjs
    .sendForm(
      "service_s3qy569",
      "template_10hqnov",
      event.target,
      "iMrbgJxFlVYudzQyw"
    )
    .then(() => {
      setTimeout(() => {

        loading.classList.remove("modal__overlay--visible");
      }, 5000);
 
      success.classList.add("modal__overlay--visible");  
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on email@email.com"
      );
    });
}



function toggle__modal() {

  console.log("toggle modala", isModalOpen);

  isModalOpen = !isModalOpen;

  if (isModalOpen) {
      return document.body.classList.add("modal--open");
  } else {
      return document.body.classList.remove("modal--open")
  }
  ;
}

