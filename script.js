document.addEventListener('DOMContentLoaded', () => {
    // Popup
    const ctaButton = document.getElementById('cta-button');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    ctaButton.addEventListener('click', () => {
        popup.classList.remove('hidden');
    });

    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Accordion
    const accordionButton = document.querySelector('.accordion-button');
    const accordionContent = document.querySelector('.accordion-content');

    accordionButton.addEventListener('click', () => {
        accordionContent.classList.toggle('hidden');
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`);

        contactForm.reset();
    });
});
