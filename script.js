
        // Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('active');
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('nav ul').classList.remove('active');
                }
            });
        });
        
        // Contact Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Format the message for WhatsApp
            const whatsappMessage = `Hello Mannat Pumps!%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${message}%0A%0ALocation: Joshi Peth, Jalgaon, Maharashtra 425001 (21.011518, 75.571195)%0A%0AI'm interested in your products and would like to know more.`;
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/919822469783?text=${whatsappMessage}`;
            
            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');
            
            // Show confirmation message
            alert('Thank you for your message! You will be redirected to WhatsApp to send your inquiry.');
            
            // Reset the form
            this.reset();
        });