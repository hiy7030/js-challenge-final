const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const hiddenToDos = document.querySelector("#todos");
const hiddenImg = document.querySelector("#images");
const hiddenPlaylist = document.querySelector("#playlist");
const hiddenMainRow = document.querySelector(".main-row");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  greeting.innerText = `반가워요! ${userName}`;
  greeting.classList.remove(HIDDEN_CLASS);
  hiddenToDos.classList.remove(HIDDEN_CLASS);
  hiddenImg.classList.remove(HIDDEN_CLASS);
  hiddenPlaylist.classList.remove(HIDDEN_CLASS);
  hiddenMainRow.classList.remove(HIDDEN_CLASS);
}

const localStorageUsername = localStorage.getItem(USERNAME_KEY);

if (localStorageUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASS);
  greeting.innerText = `좋은 하루입니다! ${localStorageUsername}`;
  greeting.classList.remove(HIDDEN_CLASS);
  hiddenToDos.classList.remove(HIDDEN_CLASS);
  hiddenImg.classList.remove(HIDDEN_CLASS);
  hiddenPlaylist.classList.remove(HIDDEN_CLASS);
  hiddenMainRow.classList.remove(HIDDEN_CLASS);
}
