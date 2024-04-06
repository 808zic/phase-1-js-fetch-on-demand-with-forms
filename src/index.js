const init = () => {
  


document.addEventListener('DOMContentLoaded', init);
// NB any code related to dome should go to init or a function named init
//sted 1.add event listener to the form element
const inputForm = document.querySelector("form");
//then will have to add an event listener to form element currently represented by input form
// event listener require 2 arguments ,type of evenet, a string and the listener
// for the listener we need to provide a callback function that will be called to handle the event
inputForm.addEventListener("submit", (event) => {
    /*The event object that gets passed in to our callback contains a particular 
    method we need in order to override our form's behavior — preventDefault().*/
    event.preventDefault();
   
/*we need to get the value of whatever the user entered; whatever you just entered into the form.

There are two ways we can get this value:

    The event object actually contains the value we need
    We can select the specific DOM element and get its value*/
    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);



