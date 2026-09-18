// Custom JavaScript for Cap Coding Blog Page

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.classList.add("was-validated");
      return;
    }

    formMessage.textContent = "Thank you! Your message has been submitted.";
    contactForm.reset();
    contactForm.classList.remove("was-validated");
  });
});
