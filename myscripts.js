
// Sidebar Navigation Toggle
    function toggleMenu(x) {
        x.classList.toggle("change");
        var x = document.getElementById("sidebar");
        if (x.style.visibility === "visible") {
            x.style.visibility = "hidden";
        } else {
            x.style.visibility = "visible";
        }
    }

// Task Form Show/Hide (when clicking CREATE button)
    function toggleTaskForm() {
        var x = document.getElementById("task-form");
            if (x.style.visibility === "visible") {
                x.style.visibility = "hidden";
            } else {
                x.style.visibility = "visible";
            }
    }

// Date/Time
