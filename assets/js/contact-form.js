document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitButton = form.querySelector("button[type='submit']");

  if (form) {
      form.addEventListener("submit", async function (event) {
          event.preventDefault();

          submitButton.disabled = true;
          submitButton.innerHTML = 'Wysyłanie... <span class="spinner-border spinner-border-sm"></span>';

          const formData = new FormData(form);
          const jsonData = Object.fromEntries(formData.entries());

          try {
              const response = await axios.post(
                  "https://github-backend-170283151243.europe-west1.run.app/api/forms/contact",
                  jsonData,
                  { headers: { "Content-Type": "application/json" } }
              );

              if (response.status === 200) {
                  alert("Dziękujemy za wysłanie formularza!");
                  form.reset();

                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                      'event': 'form_submit',
                      'form_id': 'contactForm'
                  });
              }
          } catch (error) {
              console.error("Error submitting form:", error.response ? error.response.data : error.message);
              alert("Wystąpił błąd przy zapisywaniu formularza.");
          } finally {
              submitButton.disabled = false;
              submitButton.innerHTML = "Wyślij";
          }
      });
  }
});