import emailjs from "@emailjs/browser";

const showFormMessage = (form, type, message) => {
    // Look for existing alert element in parent container or within form
    let alertEl = form.parentElement?.querySelector('.alert-success, .form-alert-msg') 
        || form.querySelector('.alert-success, .form-alert-msg');

    if (!alertEl) {
        alertEl = document.createElement('div');
        alertEl.className = 'form-alert-msg';
        form.parentNode.insertBefore(alertEl, form);
    }

    if (alertEl._hideTimeout) {
        clearTimeout(alertEl._hideTimeout);
    }

    const isSuccess = type === 'success';
    alertEl.style.transition = 'opacity 0.4s ease';
    alertEl.style.opacity = '1';
    alertEl.style.display = 'block';
    alertEl.style.padding = '12px 16px';
    alertEl.style.marginBottom = '16px';
    alertEl.style.borderRadius = '6px';
    alertEl.style.fontSize = '14px';
    alertEl.style.fontWeight = '500';
    alertEl.style.lineHeight = '1.5';
    alertEl.style.textAlign = 'left';

    if (isSuccess) {
        alertEl.className = 'alert alert-success form-alert-msg';
        alertEl.style.backgroundColor = '#d4edda';
        alertEl.style.color = '#155724';
        alertEl.style.border = '1px solid #c3e6cb';
        // If the element already has predefined text, retain it, otherwise set default
        if (!alertEl.innerText.trim()) {
            alertEl.innerText = message || 'Request submitted successfully! Our counselors will contact you soon.';
        }

        // Automatically hide after 5 seconds
        alertEl._hideTimeout = setTimeout(() => {
            alertEl.style.opacity = '0';
            setTimeout(() => {
                alertEl.style.display = 'none';
                alertEl.style.opacity = '1';
            }, 400);
        }, 5000);
    } else {
        alertEl.className = 'alert alert-danger form-alert-msg';
        alertEl.style.backgroundColor = '#f8d7da';
        alertEl.style.color = '#721c24';
        alertEl.style.border = '1px solid #f5c6cb';
        alertEl.innerText = message || 'Failed to send the message. Please try again.';
    }

    try {
        alertEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (_) {}
};

export const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    // Hide previous messages if any
    const existingAlert = form.parentElement?.querySelector('.alert-success, .alert-danger, .form-alert-msg')
        || form.querySelector('.alert-success, .alert-danger, .form-alert-msg');
    if (existingAlert) {
        existingAlert.style.display = 'none';
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerText : 'Submit';
    if (submitBtn) {
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;
    }

    try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const nameValue = (data.full_name || data.name || data.from_name || data.user_name || '').trim();
        const emailValue = (data.email || data.user_email || data.from_email || '').trim();
        let rawPhone = (data.phone || data.mobile || data.contact || '').trim();
        const countryCode = (data.country_code || '').trim();
        let phoneWithCode = rawPhone;

        if (countryCode) {
            const cleanCode = countryCode.startsWith('+') ? countryCode : `+${countryCode}`;
            if (rawPhone.startsWith('+')) {
                phoneWithCode = rawPhone;
            } else {
                phoneWithCode = `${cleanCode} ${rawPhone}`;
            }
        } else if (rawPhone) {
            if (!rawPhone.startsWith('+')) {
                const digitsOnly = rawPhone.replace(/\D/g, '');
                if (digitsOnly.length === 10) {
                    phoneWithCode = `+91 ${digitsOnly}`;
                } else if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
                    phoneWithCode = `+91 ${digitsOnly.slice(2)}`;
                } else {
                    phoneWithCode = `+91 ${rawPhone}`;
                }
            }
        }

        const courseValue = (data.course || data.course_interested || data.destination || '').trim();
        const cityValue = (data.city || '').trim();
        const messageValue = (data.questions || data.message || data.query || data.comments || '').trim();

        // Compile all enquiry details into message so EmailJS templates
        // that only display {{message}} will always include Course, City, and Questions!
        const detailLines = [];
        if (courseValue) detailLines.push(`Course / Destination: ${courseValue}`);
        if (cityValue) detailLines.push(`City: ${cityValue}`);
        if (messageValue) detailLines.push(`Questions / Query: ${messageValue}`);

        const combinedMessage = detailLines.length > 0
            ? detailLines.join('\n')
            : 'No additional details provided';

        const templateParams = {
            ...data,
            // Name aliases (EmailJS templates typically use {{from_name}} or {{name}})
            name: nameValue,
            from_name: nameValue,
            user_name: nameValue,
            full_name: nameValue,

            // Email aliases
            email: emailValue,
            from_email: emailValue,
            user_email: emailValue,
            reply_to: emailValue,

            // Phone aliases (always includes country code)
            phone: phoneWithCode,
            mobile: phoneWithCode,
            contact: phoneWithCode,
            phone_number: phoneWithCode,
            country_code: countryCode || '+91',

            // Course & City aliases
            course: courseValue,
            destination: courseValue,
            course_destination: courseValue,
            course_interested: courseValue,
            city: cityValue,
            user_city: cityValue,

            // Questions / query aliases
            questions: messageValue,
            query: messageValue,
            user_message: messageValue,
            comments: messageValue,

            // Message aliases - contains Course, City, and Questions so they always show in the email!
            message: combinedMessage,
            details: combinedMessage,
            additional_details: combinedMessage,
            enquiry_details: combinedMessage,
        };

        // This is 100% React. It securely sends the form data via EmailJS which emails you directly!
        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
        );

        if (response.status === 200) {
            showFormMessage(form, 'success');
            form.reset();
        } else {
            showFormMessage(form, 'error', 'Failed to send the message, please try again.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        showFormMessage(form, 'error', 'Failed to send the message. Please check your internet connection and try again.');
    } finally {
        if (submitBtn) {
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    }
};
