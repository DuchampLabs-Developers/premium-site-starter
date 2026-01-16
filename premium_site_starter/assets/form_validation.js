
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Required fields
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

    if (isValid) {
        alert('Will be submitted, after connecting with backend'); // replace with backend
        form.reset();
    }
});
