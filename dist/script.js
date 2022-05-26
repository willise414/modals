'use strict';

// get selector and store in variable for repeated use
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//since button all have same class of show-modal, have to use querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');
const text = document.querySelectorAll('.text');

//console.log(text);

//console.log(btnsOpenModal);

//iterate through the buttons and show the text content to make sure the loop is working
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent);
// }

//Now change loop to add an event handler rather than show text content.
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    // console.log(btnsOpenModal[i].id);
    //console.log(btnsOpenModal[i]);
    let modalText = btnsOpenModal[i].id;

    //console.log(modalText);
    if (text[i].classList.contains(modalText)) {
      text[i].classList.remove('hidden');
    } else {
      text[i].classList.add('hidden');
    }

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

//also have to use same function to close modal when overlay is clicked. DRY - create a named function and use it twice instead.

function closeModalWindow() {
  for (let i = 0; i < text.length; i++) {
    if (!text[i].classList.contains('hidden')) {
      text[i].classList.add('hidden');
    }
  }
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    //if modal does not contain a class of hidden
    if (!modal.classList.contains('hidden')) {
      closeModalWindow();
    }
  }
});
