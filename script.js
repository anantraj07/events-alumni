document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for all event buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const eventType = this.textContent.trim();
            alert(`Thank you for your interest in our ${eventType} event! We'll contact you soon.`);
            
            // Add visual feedback to the button
            this.classList.add('animate-pulse');
            setTimeout(() => {
                this.classList.remove('animate-pulse');
            }, 1000); // Remove pulse after 1 second
        });
    });

    // Initial animation for the floating header
    const header = document.querySelector('.floating');
    // Ensure header starts visible if it was hidden by default for animation
    if (header) {
        header.style.opacity = 1; 
    }
});
