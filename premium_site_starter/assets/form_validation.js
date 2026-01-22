const form = document.getElementById('contactForm');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const requiredFields = [
        { id: 'first-name', errorId: 'first-name-error' },
        { id: 'last-name', errorId: 'last-name-error' },
        { id: 'email', errorId: 'email-error' },
        { id: 'phone', errorId: 'phone-error' },
        { id: 'project', errorId: 'project-error' }
    ];

    let isValid = true;

    requiredFields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);

        if (!input.value.trim()) {
            error.classList.remove('hidden');
            isValid = false;
        } else {
            error.classList.add('hidden');
        }
    });

    if (!isValid) return;

    // Disable button while submitting
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    const formData = new FormData(form);

    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    try {
        const response = await fetch("https://formspree.io/f/xqeepvkp", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        const successModal = document.getElementById('successModal');
        const closeModal = document.getElementById('closeModal');

        if (response.ok) {
            successModal.classList.remove('hidden');
            successModal.classList.add('flex');
            form.reset();
        } else {
            console.error('Form submission error:', response.statusText);
            errorMsg.classList.remove('hidden');
        }


    } catch (error) {
        errorMsg.classList.remove('hidden');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";
    }
});

//close modal after form submission
closeModal.addEventListener('click', () => {
    successModal.classList.add('hidden');
    successModal.classList.remove('flex');
    window.location.reload();
});
