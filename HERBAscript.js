// her.ba Main Interactions Script

document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth scroll for anchors (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Order Form Simulation
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('orderName').value;
            const btn = orderForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Processing...";
            btn.style.backgroundColor = "#D4AF37"; // gold processing state
            
            setTimeout(() => {
                btn.style.backgroundColor = "#2F5D3A";
                btn.innerText = `Thank you, ${name}! Order Placed.`;
                orderForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                }, 3000);
            }, 1500);
        });
    }

    // Tracker Simulation
    const trackForm = document.getElementById('trackForm');
    if (trackForm) {
        trackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const trackId = document.getElementById('trackId').value;
            const trackResult = document.getElementById('trackResult');
            const displayId = document.getElementById('displayTrackId');
            const btn = trackForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Searching...";
            
            setTimeout(() => {
                displayId.innerText = trackId.toUpperCase();
                trackResult.style.display = 'block';
                btn.innerText = originalText;
            }, 800);
        });
    }

    // Contact Form Simulation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Sending...";
            
            setTimeout(() => {
                btn.innerText = "Message Sent! We will reply soon.";
                btn.style.backgroundColor = "#2F5D3A";
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                }, 4000);
            }, 1000);
        });
    }
});
