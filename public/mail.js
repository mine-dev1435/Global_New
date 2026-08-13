document.addEventListener('DOMContentLoaded', function() {
    // Clean up the URL if it has form_submitted=success
    if (window.location.search.includes('form_submitted=success')) {
        const url = new URL(window.location);
        url.searchParams.delete('form_submitted');
        window.history.replaceState({}, document.title, url.pathname + url.search);
    }

    // Find all forms that submit to process_form.php
    const forms = document.querySelectorAll('form[action="process_form.php"]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default page reload
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(form);

            fetch('process_form.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                // Since process_form.php currently redirects, fetch might follow it or return an opaque response.
                // If it successfully completes the request without a network error, we show success.
                form.reset();
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                // Create a success message dynamically if it doesn't exist
                let alertBox = form.previousElementSibling;
                if (!alertBox || !alertBox.classList.contains('alert-success')) {
                    alertBox = document.createElement('div');
                    alertBox.className = 'alert alert-success';
                    alertBox.style.padding = '10px';
                    alertBox.style.marginBottom = '15px';
                    alertBox.style.borderRadius = '5px';
                    alertBox.style.backgroundColor = '#d4edda';
                    alertBox.style.color = '#155724';
                    alertBox.style.border = '1px solid #c3e6cb';
                    form.parentNode.insertBefore(alertBox, form);
                }
                
                alertBox.innerHTML = 'Request submitted successfully! Our counselors will contact you soon.';
                alertBox.style.display = 'block';
                
                // Hide after 5 seconds
                setTimeout(() => {
                    alertBox.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                alert('There was an error submitting your request. Please try again later.');
            });
        });
    });
});
