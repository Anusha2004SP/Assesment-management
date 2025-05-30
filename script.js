window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("assessmentForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const titleInput = document.getElementById("title");
      const descriptionInput = document.getElementById("description");
  
      const title = titleInput.value.trim();
      const description = descriptionInput.value.trim();
  
      if (title === "" || description === "") {
        alert("Please fill in both fields.");
        return;
      }
  
      addAssessmentToDOM(title, description);
      form.reset();
    });
  
    function addAssessmentToDOM(title, description) {
      const ul = document.getElementById("assessments");
      const li = document.createElement("li");
      li.innerHTML = `<strong>${title}</strong><br>${description}`;
      ul.appendChild(li);
    }
  });