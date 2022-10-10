'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btn = document.querySelector('.close-modal');

const showModals = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModals.forEach(element => {
  element.addEventListener('click', openModal);
});

btn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
