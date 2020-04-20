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

//when thepage is loaded there will  be text effects on the intro, and this is the ontick fuction code
function onTick() {
    //the onTick function
    const span = text.querySelectorAll("span")[char]; //getting the spans that we created previously
    span.classList.add("fadeIT"); //adding the style class of fadeIT to each span (this fadeIT class is declared in main.css file).

    char++; //increasing the char by 1 each time the function is called
    if (char === splitText.length) {
        //so when the char variable will reach the length of splitText variable it will inter into this conditional statement
        complete(); //then the complete function will be called
        return; // it will return
    }
}

function complete() {
    clearInterval(timer); //it simply clears the timer and set it to null
    timer = null;
}

//the end :)