let form = document.getElementById('myForm'); // Declaring a variable named form and using getElementById to find the HTML element.

form.addEventListener('submit', function(event) { // Adding an event listener "submit" and event handler.
  event.preventDefault();  // Prevents the form default action
  console.log('Form default prevented:', event.defaultPrevented);  // Console logs true if the default action was prevented

  let inputText = document.getElementById('inputText'); // Declaring a variable named inputText and using getElementById to find the input element
  console.log('Input value:', inputText.value); // Console logs the value of the input text element

  let inputColor = document.getElementById('inputColor'); // Declaring a variable named inputColor and using getElementById to find the color input element
  console.log('Selected color:', inputColor.value); // Console logs the value of the color input element
});
