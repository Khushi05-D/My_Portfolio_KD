function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var status = document.getElementById("status");
    status.innerHTML = "Sending...";
    
    setTimeout(function() {
      status.innerHTML = "Message Sent!";
    }, 1000);
  }
  