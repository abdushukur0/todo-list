//Delete button
const list = document.querySelector(".container ul");

list.addEventListener("click", function (e) {
  if (e.target.tagName == "BUTTON") {
    const li = e.target.parentElement;
    list.removeChild(li);
  } else {
    console.log("user did not clicked any button");
  }
});

//Add-list
var formAdd = document.forms["add-list"];
formAdd.addEventListener("submit", function (c) {
  c.preventDefault();

  let val = formAdd.querySelector('input[type="text"]').value;
  let regex = /\w+/gi;
  if (regex.test(val)) {
    //create elements
    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");

    //added Content to created elements

    span.textContent = val;
    button.textContent = "Delete";

    //added class/style to the creted elements

    li.classList.add("text-container");
    span.classList.add("text");
    button.classList.add("btn");

    //added created elements in the DOM

    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
    val = "My value";
    document.querySelector("#add-list input").value = "";
  } else {
    alert("Write Something To Be Added");
  }
});

// hide all list elements

let formHide = document.querySelector("#hide-content input");

let labelText = formHide.nextElementSibling.nextElementSibling;

formHide.addEventListener("change", function (e) {
  if (formHide.checked) {
    list.style.display = "none";
    labelText.textContent = "Show Hidden Lists";
    let span = labelText.previousElementSibling;
    span.style.left = "8.5rem";
  } else {
    list.style.display = "initial";
    labelText.textContent = "Hide All Lists";
  }
});

//Search box function

let inputBox = document.querySelector(".input-search");

inputBox.addEventListener("keyup", function (e) {
  let inputText = e.target.value.toLowerCase();

  list.querySelectorAll(".text-container .text").forEach((item) => {
    let itemText = item.textContent.toLowerCase();

    if (itemText.indexOf(inputText) !== -1) {
      item.parentElement.style.display = "Block";
    } else {
      item.parentElement.style.display = "none";
    }
  });
});