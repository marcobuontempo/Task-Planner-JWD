// NAVBAR
    // Assign burgerbox DOM element to variable "menuButton"
    let menuButton = document.getElementById("menu-button");
    
    // Sidebar Navigation Toggle
    function toggleMenu() {
        // Adds/removes "change" class from list to transform rotation of burger bars
        menuButton.classList.toggle("change");
        
        // Hides or Shows the Menu when menu/burger button is clicked 
        let sidebar = document.getElementById("sidebar");
        if (sidebar.style.visibility === "visible") {
            sidebar.style.visibility = "hidden";
        } else {
            sidebar.style.visibility = "visible";
        }
    };

    // Assign 'Create' button DOM element to variable "createButton"
    let createButton = document.getElementById("create-button");

    // Task Form Show/Hide (when clicking CREATE button) 
    function toggleTaskForm() {
        let x = document.getElementById("task-form");
            if (x.style.visibility === "visible") {
                x.style.visibility = "hidden";
                
                // Ensure "Save Task" button is displayed by default      
                saveButton.style.display = "block";
                updateButton.style.display = "none";
                deleteButton.style.display = "none";
            } else {
                x.style.visibility = "visible";
            }
        blurCards();
        }


// CARD CONTAINER
    // Blur Background
    function blurCards() {
        document.getElementById("task-card-list").classList.toggle("blurCards");
    }

// FOOTER
    // Date/Time
    function display_ct6() {
        let x = new Date()
        
        date = x.getDate();
        if (date<10) {
            date = `0${date}`
        }
        
        month = x.getMonth() + 1;
            if (month<10) {
                month = `0${month}`
            }

        year = x.getFullYear();

        let ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
        hours = x.getHours( ) % 12;
        hours = hours ? hours : 12;
            if (hours<10) {
                hours = `0${hours}`
            }

        minutes = x.getMinutes();
        if (minutes<10) {
            minutes = `0${minutes}`
        }

        seconds = x.getSeconds();
        if (seconds<10) {
            seconds = `0${seconds}`
        }



        let x1 = `${date}/${month}/${year} - ${hours}:${minutes}:${seconds} ${ampm}`
        document.getElementById('ct6').innerHTML = x1;
        display_c6();
        }
        function display_c6(){
        let refresh=1000; // Refresh rate in milli seconds
        mytime=setTimeout('display_ct6()',refresh)
        }
        display_c6(); 