import emailjs from "@emailjs/browser";

export const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerText : 'Submit';
    if (submitBtn) {
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;
    }

    try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // This is 100% React. It securely sends the form data via EmailJS which emails you directly!
        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            data,
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
        );

        if (response.status === 200) {
            alert('Request submitted successfully! Our counselors will contact you soon.');
            form.reset();
        } else {
            alert('Failed to send the message, please try again.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to send the message. Please check your internet connection and make sure your EmailJS credentials in .env are correct.');
    } finally {
        if (submitBtn) {
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    }
};
