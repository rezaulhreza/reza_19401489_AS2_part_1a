/******
 * this is for the portfolio page
 */


function scrollAppear() {
    var introText = document.querySelectorAll(".intro-text"); //getting all the elements with intro text class

    //querySelectorAll returns a nodelist of each element having the class name.
    introText.forEach((element) => {
        //looping over the nodelist to get each individual element with the class name
        var introPosition = element.getBoundingClientRect().top;
        //The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.(Resource w3school).and we added .top so the viewport will be from the top

        var screenPosition = window.innerHeight / 1.2; //window.innerHeight property returns the height of the window content area.and we divided it by 1.2 to get ourself some more scrolling time so we can see the effects nicely.

        if (introPosition < screenPosition) {
            element.classList.add("intro-appear"); //adding the style class of intro-appear when the introPosition will less then our screenPosition
        }
    });
    //the end :)
    var introText2 = document.querySelectorAll(".intro-text2"); //getting all the elements with intro text2 class

    //querySelectorAll returns a nodelist of each element having the class name.
    introText2.forEach((element) => {
        //looping over the nodelist to get each individual element with the class name
        var introPosition = element.getBoundingClientRect().top;
        //The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.(Resource w3school).and we added .top so the viewport will be from the top
        var screenPosition = window.innerHeight / 1.2; //window.innerHeight property returns the height of the window content area.and we divided it by 1.2 to get ourself some more scrolling time so we can see the effects nicely.
        if (introPosition < screenPosition) {
            element.classList.add("intro-appear"); //adding the style class of intro-appear when the introPosition will less then our screenPosition
        }
    });
}
//the end :)

window.addEventListener("scroll", scrollAppear); //calling the function scrollAppear on scroll