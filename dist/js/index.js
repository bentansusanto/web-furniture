
    
const dropdown = document.querySelector('.relative');

// Add a mouseenter event listener to the dropdown link
dropdown.addEventListener('mouseenter', () => {
  // Remove the 'hidden' class from the dropdown menu
  dropdown.querySelector('ul').classList.remove('hidden');
});

// Add a mouseleave event listener to the dropdown link
dropdown.addEventListener('mouseleave', () => {
  // Add the 'hidden' class to the dropdown menu
  dropdown.querySelector('ul').classList.add('hidden');
});

// Add a click event listener to the dropdown menu
dropdown.addEventListener('click', (event) => {
  // Check if the clicked target is a dropdown item
  if (event.target.closest('li')) {
    // Add the 'hidden' class to the dropdown menu
    dropdown.querySelector('ul').classList.add('hidden');
  }
});

// Dropdown menu mobile
const mobileDropdowns = document.querySelectorAll('#mobile-menu li.relative');
    mobileDropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', () => {
        dropdown.querySelector('ul').classList.toggle('hidden');
      });
    });


const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

const testimonials = ['testimonial1', 'testimonial2', 'testimonial3'];
    let currentTestimonial = 0;

    function showTestimonial(index) {
      for (let i = 0; i < testimonials.length; i++) {
        if (i === index) {
          document.getElementById(testimonials[i]).classList.remove('hidden');
        } else {
          document.getElementById(testimonials[i]).classList.add('hidden');
        }
      }
    }

    function showNextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }

    function showPrevTestimonial() {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
    }

    showTestimonial(currentTestimonial);

    // Send Email
    const form = document.getElementById('contactForm');
    const sendBtn = document.getElementById('sendBtn');
    form.addEventListener('input', function() {
        sendBtn.disabled = !form.checkValidity();
      });
  
      form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const numberWA = "+6282221868004"
  
        // Format the message to be sent to WhatsApp
        const message = `Name: ${name}%0aEmail: ${email}%0aWhatsApp: ${whatsapp}`;
  
        // Construct the WhatsApp URL
        const whatsappURL = `https://wa.me/${numberWA}?text=${encodeURIComponent(
          message
        )}`;
  
        // Open WhatsApp in a new tab
        window.open(whatsappURL, '_blank');
      });