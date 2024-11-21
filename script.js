
let form = document.getElementById('myForm'); // Declaring a variable name form and using getElementById to find the html element.

form.addEventListener('submit', function(event) { // Adding a eventlistener "submit" and event handler.
  event.preventDefault();  // Prevents the form default action
  console.log('Form default prevented:', event.defaultPrevented);  // Console logs true if the default action was prevented
});


