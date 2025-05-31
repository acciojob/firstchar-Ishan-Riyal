function firstChar(text) {
  // tries to use 'text', but 'text' is undefined in this scope
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) !== ' ') {
      return text.charAt(i);
    }
  }
  return '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
