const form = document.getElementById('contactForm');

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

    const formData = new FormData(form);

    try {
        const response = await fetch("https://formspree.io/f/mykkeodw", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        const result = await response.json(); 
        console.log(result);

        if (response.ok) {
            alert("Thanks for choosing us, we will get back to you soon!");
            form.reset();
        } else {
            alert(result.error || "Something went wrong. Please try again.");
        }

    } catch (error) {
        console.error(error);
        alert("Network error. Please try later.");
    }

});
