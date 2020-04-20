let text = document.querySelector(".animate-text"); //getting the dom using class name and saving it to a variable
let srtText = text.textContent; // getting the string (our target text) from the text variable using textContent property of javascript
let splitText = srtText.split(""); //splitting up the the string in srtText variable and making an array of each individual characters
text.textContent = ""; //resetting text variable so it won't repeat when we add span to the variable later on

for (let i = 0; i < splitText.length; i++) {
    //looping through  the splitText array
    text.innerHTML += "<span>" + splitText[i] + "</span>"; //adding span to each characters of the array
}

let char = 0;
let timer = setInterval(onTick, 100); //setting up the timer so that it would call the onTick function every 100 ms