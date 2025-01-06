document.getElementsByClassName("play-simulation-btn")[0].addEventListener("click", function() {

      // Sending the POST request
        fetch('/api/my-endpoint/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Specify JSON format
            },
            body: JSON.stringify(postData),  // Convert data to JSON string
        })
        .then(response => response.json())  // Parse JSON response
        .then(data => {
            console.log("Response from server:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });

    alert("Starting task!")
    });
