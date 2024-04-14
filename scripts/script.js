document.addEventListener('DOMContentLoaded', function () {
  const footerText = document.querySelector('footer p');
  const currentYear = new Date().getFullYear();
  footerText.textContent += ` - ${currentYear}`;
});
