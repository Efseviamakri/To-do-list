//we are creating some variables for the elements [input and button] //
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    //Αν πας να προσθέσεις κάτι κενό σου βγάζει μηνυμα λάθους//
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li"); //δημιουργεί ένα νέο στοιχείο λι και το αποθηκεύει στη μεταβλητή li//
        li.innerHTML = inputBox.value;//θέτει το περιεχόμενο του στοιχείου li ίσο με την τιμή που έχει το input box//
        listContainer.appendChild(li);//προσθέτει το στοιχείο li ως παιδί του listContainer, δηλαδή το προσθέτει στη λίστα//
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";//θέτει το περιεχόμενο του στοιχείου spam ίσο με το σύμβολο χ//
        li.appendChild(span);//displays it
    }

    inputBox.value = "";//καθαρίζει το input box μετά την προσθήκη κειμένου//
}

// Add task on Enter keypress inside the input box
inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { //Ελέγχει αν το πλήκτρο που πατήθηκε είναι το enter
        event.preventDefault(); //Αποτρέπει την προεπιλεγμένη συμπεριφορά του πλήκτρου Enter
        addTask(); //Καλεί τη συνάρτηση addTask για να προσθέσει την εργασία στη λίστα
    }
});

// Listen for clicks on tasks to toggle checked status
listContainer.addEventListener("click", function(e) {
    // Check if the click was on the delete button (span)
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the task
    }
    // Check if the click was on the li element itself (the task)
    else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the checked class
    }
}, false);