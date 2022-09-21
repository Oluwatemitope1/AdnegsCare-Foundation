"use strict";
const cashBtn = document.querySelectorAll('.donate-cash');
const materialBtn = document.querySelectorAll('.donate-material');
const cashForm = document.querySelector('.donation-form-1');
const materialForm = document.querySelector('.donation-form-2');
const country = document.querySelectorAll('.country');


console.log(country);


for (let i = 0; i < country.length; i++) {
  document.addEventListener("DOMContentLoaded", () => {
  
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let output = "";
        data.forEach((country) => {
          output += ` <option value="1">${country.name.common}</option>`;
        });
        country[i].innerHTML = output;
      })
      .catch((err) => console.log(err));
  });
}



function switchToMaterialForm () {
  cashForm.classList.add('switch');
  materialForm.classList.remove('switch');
  
}

function switchToCashForm () {
  materialForm.classList.add('switch');
  cashForm.classList.remove('switch');
}


for (let i = 0; i < materialBtn.length; i++) {
  materialBtn[i].addEventListener('click', switchToMaterialForm);
}

for (let i = 0; i < cashBtn.length; i++) {
  cashBtn[i].addEventListener('click', switchToCashForm);
}






// 'use strict';
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnOpenModal = document.querySelectorAll('.show-modal');
// const closeModal = document.querySelector('.close-modal');
// console.log(btnOpenModal);

// function showModal() {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// }
// // to close the modal window
// function exitModal() {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// }

// for (let i = 0; i < btnOpenModal.length; i++) {
//   btnOpenModal[i].addEventListener('click', showModal);
// }

// closeModal.addEventListener('click', exitModal);
// overlay.addEventListener('click', exitModal);

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     exitModal();
//   }
// });


//    Animation==========


window.addEventListener('scroll', () =>{

  let content = document.querySelector('.donation-flex');
  let contentPosition = content.getBoundingClientRect().top;
  let scrollPosition = window.innerHeight;

  if (contentPosition < scrollPosition){
      content.classList.add('show');
  }else {
      content.classList.remove('show');
  }
});
