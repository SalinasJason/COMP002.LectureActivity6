let form = document.getElementById('myForm'); // Declaring a variable named form and using getElementById to find the HTML element.


window.addEventListener('load', function() { // Adding an event listener "load" and it triggers once the page has fully loaded
    let savedColor = localStorage.getItem('selectedColor'); // Declaring a variable named savedColor and using localStorage.getItem to find it in the local storage.

    if (savedColor) { // Checks if a saved color value exists
      console.log('Saved color before the page refreshed:', savedColor); // Console logs the saved color value to the console
    }
  });
  
form.addEventListener('submit', function(event) { // Adding an event listener "submit" and event handler.
  event.preventDefault();  // Prevents the form default action
  console.log('Form default prevented:', event.defaultPrevented);  // Console logs true if the default action was prevented

  let inputText = document.getElementById('inputText'); // Declaring a variable named inputText and using getElementById to find the input element
  console.log('Input value:', inputText.value); // Console logs the value of the input text element

  let inputColor = document.getElementById('inputColor'); // Declaring a variable named inputColor and using getElementById to find the color input element
  console.log('Selected color:', inputColor.value); // Console logs the value of the color input element

  localStorage.setItem('selectedColor', inputColor.value); // Stores the value of inputColor in the local storage
  console.log('Color saved:', inputColor.value); // Console logs the color that was saved 
});
