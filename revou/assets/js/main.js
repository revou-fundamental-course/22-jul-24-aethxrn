// carousel

const carouselItems = document.querySelectorAll(".carousel__item");
let i = 1;

setInterval(() => {
  Array.from(carouselItems).forEach((item) => {
    if (i < carouselItems.length) {
      item.style.transform = `translateX(-${i * 100}%)`;
    }
  });

  if (i < carouselItems.length) {
    i++;
  } else {
    i = 0;
  }
}, 3000);

// form validation

function formValidation() {
  let name = document.getElementById("inputName").value;
  let email = document.getElementById("inputEmail").value;

  console.log(name);

  if (name == "" || email == "") {
    alert("You need to fill the input field");
  } else {
    alert("Form submitted succesfully!");
    alert("Hello " + name + "!");
  }
}
