 // Function to read URL parameters
        function getParam(key) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(key) || "Not provided";
        }

        // Insert submitted data into the page
        document.getElementById("firstName").textContent = getParam("firstName");
        document.getElementById("lastName").textContent = getParam("lastName");
        document.getElementById("email").textContent = getParam("email");
        document.getElementById("mobile").textContent = getParam("mobile");
        document.getElementById("business").textContent = getParam("business");
        document.getElementById("timestamp").textContent = getParam("submittedDate");