//getting modal 1 and saving to a variable (to display message sent one)
let modal = document.getElementById("my-modal");

//getting modal 2 and saving to a variable (to display message sent one)
let modal2 = document.getElementById("my-modal2");

//getting the button which will open the modal
let modalBtn = document.getElementById("modal-btn");

//getting the close button for modal 1 and saving it in a variable
let closeBtn = document.getElementById("close-btn");

//getting the close button for modal 2  and saving it in a variable
let closeBtn2 = document.getElementById("close-btn2");

//getting the input fields and saving them
let nameValue = document.getElementById("user-name"); //getting name field ***N.B ->here we are saving the field not the value
let numValue = document.getElementById("user-phone"); //getting phone field ***N.B ->here we are saving the field not the value
let mailValue = document.getElementById("user-mail"); //getting mail field ***N.B ->here we are saving the field not the value
let msgValue = document.getElementById("user-msg"); //getting message field ***N.B ->here we are saving the field not the value

//adding event listener to the buttons we saved
modalBtn.addEventListener("click", openModal); //event listener for send button and calling the desired function
closeBtn.addEventListener("click", closeModal); //event listener for close button of modal 1 and calling the desired function
closeBtn2.addEventListener("click", closeModal); //event listener for close button of modal 2 and calling the desired function
window.addEventListener("click", outsideClick); //event listener for window object and calling the desired function

// Opening modal if the modalBtn is clicked
function openModal() {
    let name = nameValue.value; //saving the value of name field from the nameValue variable that we saved previously
    let phone = numValue.value; //saving the value of phone field from the numValue variable that we saved previously
    let mail = mailValue.value; //saving the value of mail field from the mailValue variable that we saved previously
    let msg = msgValue.value; //saving the value of message field from the msgValue variable that we saved previously

    if (name == "" || phone == "" || mail == "" || msg == "") {
        //checking if any of the form fields are empty or not
        modal2.style.display = "block"; // if any of these field remain empty we show the second modal which displays error message
    } else {
        modal.style.display = "block"; // if all the fields are filled then we display the first modal modal which displays sent  message
        document.getElementById("myForm").reset(); // resetting the form fields
    }
}

// Closing modal if the closeBtn or closeBtn2 is clicked
function closeModal() {
    modal.style.display = "none"; //closing the first modal if close button is clicked
    modal2.style.display = "none"; //closing the 2nd  modal if close button is clicked
}

//Closing modal if clicked  Outside Click (on window)
function outsideClick(e) {
    if (e.target == modal || e.target == modal2) {
        modal.style.display = "none";
        modal2.style.display = "none";
    }
}