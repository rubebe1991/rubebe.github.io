function calculatePrice() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var totalPrice = 0;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            totalPrice += parseInt(checkbox.value);
        }
    });
    document.getElementById('totalPrice').value = "₱" + totalPrice;
}

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
    // Here, you can add any additional processing before redirecting
    window.location.href = 'submit.html'; // Redirect to submit.html
}
