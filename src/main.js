import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/utils.css';

import darkMode from './utils/dark-mode';

darkMode();
lazyLoading();

document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); 
  
    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });
  
      if (response.ok) {
        document.getElementById("formMessage").classList.remove("hidden"); 
        form.reset();
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please check your connection and try again.");
    }
  });

  document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault(); 
  
    const form = document.getElementById("contactForm");
  
    form.submit(); 
  
    setTimeout(() => {
      document.getElementById("formMessage").classList.remove("hidden"); 
      form.reset(); 
      form.style.display = "none"; 
    }, 500);
  });
  
async function loadHTML(file, containerId) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Error loading ${file}`);
        const content = await response.text();
        document.getElementById(containerId).innerHTML = content;
    } catch (error) {
        console.error(error);
    }
}


loadHTML('privacy.html', 'privacy-section');

loadHTML('terms.html', 'terms-section');