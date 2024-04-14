document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission

  emailjs.sendForm('service_p8fpcjn', 'template_h4xmdyc', this) // Add service id and template id
  .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message sent successfully!");
      document.getElementById('contact-form').reset();  // Reset the form after successful send
  }, function(error) {
      console.log('FAILED...', error);
      alert("Failed to send the message, please try again later.");
  });
});
