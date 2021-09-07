
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
        display_c6()    