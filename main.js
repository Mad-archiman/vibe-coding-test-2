// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add subtle animation to patterns
    const patterns = document.querySelectorAll('.pattern');
    patterns.forEach((pattern, index) => {
        pattern.style.animation = `float ${3 + index}s ease-in-out infinite`;
        pattern.style.animationDelay = `${index * 0.5}s`;
    });

    // Add CSS animation for floating effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(var(--rotation, 0deg));
            }
            50% {
                transform: translateY(-10px) rotate(var(--rotation, 0deg));
            }
        }
    `;
    document.head.appendChild(style);

    // Set rotation variables for patterns
    const rotations = [45, -30, 60, -45];
    patterns.forEach((pattern, index) => {
        pattern.style.setProperty('--rotation', `${rotations[index]}deg`);
    });
});

