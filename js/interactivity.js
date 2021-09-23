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
        var x = new Date()
        var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
        hours = x.getHours( ) % 12;
        hours = hours ? hours : 12;
        var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
        x1 = x1 + " - " +  hours + ":" +  x.getMinutes() + ":" +  x.getSeconds() + ampm;
        document.getElementById('ct6').innerHTML = x1;
        display_c6();
        }
        function display_c6(){
        var refresh=1000; // Refresh rate in milli seconds
        mytime=setTimeout('display_ct6()',refresh)
        }
        display_c6(); 