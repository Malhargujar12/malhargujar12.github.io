/* =========================================
   DATA ANALYTICS LOADER (Landing → Page Two)
   ========================================= */
   let isLoading = false;

   function openDoors() {
     if (isLoading) return;
     isLoading = true;
   
     const loader = document.getElementById("loader");
     const pageTwo = document.querySelector(".page-two");
     const percentEl = document.getElementById("percent");
   
     loader.classList.add("active");
   
     let percent = 0;
   
     // Animate percentage
     const interval = setInterval(() => {
       percent += Math.floor(Math.random() * 4) + 1; // 1–4% per step
       if (percent >= 100) percent = 100;
       percentEl.textContent = percent + "%";
       if (percent === 100) clearInterval(interval);
     }, 50); // update every 50ms
   
     // Show page two after loader
     setTimeout(() => {
       loader.classList.remove("active");
       pageTwo.classList.add("show");
     }, 2100); // 2.5 seconds total
   }
   
   
   
   /* =========================================
      RESUME TRANSITION (Page Two → Page Three)
      ========================================= */
   
   document.addEventListener("DOMContentLoaded", () => {
     const resumeBtn = document.getElementById("resumeBtn");
     const pageTwo = document.querySelector(".page-two");
     const pageThree = document.querySelector(".page-three");
     const loader = document.getElementById("loader");
   
     if (!resumeBtn) return;
   
     resumeBtn.addEventListener("click", () => {
       // SHOW LOADER AGAIN
       //loader.classList.add("active");
   
       // SIMULATE LOADING
       setTimeout(() => {
         loader.classList.remove("active");
         pageTwo.classList.remove("show");
         pageThree.classList.add("show");
       }, 100); // 1.8 seconds
     });
   });
   /* ===============================
   GLOBAL NAVIGATION BUTTONS
   =============================== */
   const homeBtn = document.getElementById("homeBtn");
   const backBtn = document.getElementById("backBtn");
   
   homeBtn.addEventListener("click", () => {
     document.querySelector(".page-two").classList.remove("show");
     document.querySelector(".page-three").classList.remove("show");
     document.querySelector(".page-four").classList.remove("show");
   
     document.querySelector(".page-three").scrollTo(0, 0);
   });
   
   backBtn.addEventListener("click", () => {
     const pageTwo = document.querySelector(".page-two");
     const pageThree = document.querySelector(".page-three");
     const pageFour = document.querySelector(".page-four"); // FIXED
     const pageFive = document.querySelector(".page-five"); // FIXED (if you add it later)
    



     if (pageFive && pageFive.classList.contains("show")) { 
      pageFive.classList.remove("show"); 
      pageTwo.classList.add("show"); 
      return; 
    }
     
      // If on page four → go back to page two
     if (pageFour && pageFour.classList.contains("show")) {
       pageFour.classList.remove("show");
       pageTwo.classList.add("show");
       return;
     }
   
     // If on page three → go back to page two
     if (pageThree.classList.contains("show")) {
       pageThree.classList.remove("show");
       pageTwo.classList.add("show");
       return;
     }
   
     // If on page two → go back to landing
     if (pageTwo.classList.contains("show")) {
       pageTwo.classList.remove("show");
       return;
     }
   });
   
  
  

document.querySelector('.download-btn').addEventListener('click', () => {
  window.open('Malhar_Resume (2).pdf', '_blank');
});
// Trigger Enter button when pressing Enter key
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const enterBtn = document.querySelector(".enter-btn");
    if (enterBtn) enterBtn.click();
  }
});

// Trigger Enter button when clicking anywhere on the screen
document.addEventListener("click", (e) => {
  const enterBtn = document.querySelector(".enter-btn");
  if (enterBtn && !document.querySelector(".page-two").classList.contains("show")) {
    enterBtn.click();
  }
});

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     PROJECTS BUTTON
     =============================== */
  const projectsBtn = document.querySelector(".btn.projects");
  const pageTwo = document.querySelector(".page-two");
  const pageFour = document.querySelector(".page-four");

  if (projectsBtn) {
    projectsBtn.addEventListener("click", () => {
      pageTwo.classList.remove("show");
      pageFour.classList.add("show");
    });
  }

  /* ===============================
     GET IN TOUCH BUTTON
     =============================== */
  const contactBtn = document.querySelector(".btn.contact");
  const pageFive = document.querySelector(".page-five");

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      pageTwo.classList.remove("show");
      pageFive.classList.add("show");
    });
  }
  /* =============================== 
  POPUP FUNCTION (ADD THIS HERE) =
  ============================== */ 
  function showPopup(message) { 
    const popup = document.getElementById("messagePopup"); 
    const popupText = document.getElementById("popupText"); 
    popupText.textContent = message; popup.classList.add("show"); 
    setTimeout(() => { popup.classList.remove("show"); 
  }, 2500); }
  /* ===============================
     EMAILJS FORM SUBMISSION
     =============================== */
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_bov0kwd", "template_vw0x5ia", this)
        .then(() => {
          showPopup("Message sent successfully!");

          contactForm.reset();

          setTimeout(() => {
            formStatus.style.opacity = "0";
          }, 3000);
        })
        .catch((error) => {
          fshowPopup("Failed to send message. Try again.");

          setTimeout(() => {
            formStatus.style.opacity = "0";
          }, 3000);

          console.error("EmailJS Error:", error);
        });
    });
  }

});

// Simple version - opens URL in new tab
function openProject(projectName) {
  const projectLinks = {
    'furinsight': 'https://github.com/yourusername/furinsight',
    'ai-internship': 'https://github.com/yourusername/ai-internship', 
    'dashboard': 'https://github.com/yourusername/dashboard',
    'copyright': 'Cover_Letter 1.pdf',
  };
  
  window.open(projectLinks[projectName], '_blank');
}