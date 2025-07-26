
2. script.js:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for all event buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const eventType = this.textContent.trim();
            alert(`Thank you for your interest in our ${eventType} event! We'll contact you soon.`);
            
            // Add visual feedback
            this.classList.add('animate-pulse');
            setTimeout(() => {
                this.classList.remove('animate-pulse');
            }, 1000);
        });
    });

    // Floating header animation
    const header = document.querySelector('.floating');
    setTimeout(() => {
        header.style.opacity = 1;
    }, 100);
});
