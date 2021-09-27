// TASK FORM VALIDATION

// 1. assign DOM elements
const formTitle = document.getElementById("form-title");
const formDescription = document.getElementById("form-desc");
const formAssignedTo = document.getElementById("form-assigned");
const formDue = document.getElementById("form-due");
const formStatus = document.getElementById("form-status");
const deleteButton = document.getElementById("deleteTaskBtn");
const saveButton = document.getElementById("saveTaskBtn");
const closeForm = document.getElementById("closeTaskForm");


// 2. create a function with if/else statement

// Clear Form Function
function clearForm() {
    formTitle.value = ""
    formDescription.value =""
    formAssignedTo.value = "" 
    formDue.value ="" 
    formStatus.value = ""
};


// Validate Input Logic
let titleErrorMsg = "";
let descErrorMsg = "";
let assignErrorMsg = "";
let dueErrorMsg = "";
let statusErrorMsg = "";

//validation function
function validateInput () {
    if (formTitle.value.length<5 || formDescription.value.length<5 || formAssignedTo.value.length<5 || formDue.value==="" || formStatus.value==="") {
        //specific if statements displays message if conditions are met
        if (formStatus.value==="") {
            statusErrorMsg = "-Your task status is empty.\n"
            formStatus.focus();
        } else {
            statusErrorMsg = "";
        };

        if (formDue.value==="") {
            dueErrorMsg = "-Your form due date is empty.\n";
            formDue.focus();
        } else {
            dueErrorMsg = "";
        };

        if (formAssignedTo.value.length<3) {
            assignErrorMsg = "-Your assigned to is less than 3 characters long.\n";
            formAssignedTo.focus();
        } else {
            assignErrorMsg = "";
        };

        if (formDescription.value.length<5) {
            descErrorMsg = "-Your description is less than 5 characters long.\n";
            formDescription.focus();
        } else {
            descErrorMsg = "";
        }
        
        if (formTitle.value.length<5) {
            titleErrorMsg ="-Your title is less than 5 characters long.\n";
            formTitle.focus();
        } else {
            titleErrorMsg ="";
        };
    
        //windows prompt advises of failure or success
        window.alert(`Please enter valid input:\n${titleErrorMsg}${descErrorMsg}${assignErrorMsg}${dueErrorMsg}${statusErrorMsg}`);
        return false;

    } else {
        window.alert(`Task created successfully! :)`); 
        return true;
    }
};

// 3. Listener event
    //refer to index.js

    


// Example criteria from task info:
    // Check if the Task Name input value is more than 5 characters.
    // Check if the Task Description input value is more than 5 characters.
    // Check if the Assigned To value is more than 5 characters.
    // Check if the Task Due Date input value is not empty.
    // Check if the Task Status input value is not empty.