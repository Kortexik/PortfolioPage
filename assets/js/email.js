document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('email_Message').value;
    window.open(`mailto:konradkucab.work@gmail.com?body=${message}`);
});
