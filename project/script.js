const coffeeData = [
    { name: "Sunrise Blend", roast: "Light", description: "A citrusy, bright roast perfect for early mornings." },
    { name: "Midnight Roast", roast: "Dark", description: "Bold, rich, and deep — our strongest roast." },
    { name: "Daily Drip", roast: "Medium", description: "Balanced and smooth for your everyday brew." },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const coffeeList = document.getElementById("coffeeList");
    if (coffeeList) {
      coffeeData.forEach(coffee => {
        const card = document.createElement("div");
        card.className = "coffee-card";
        card.innerHTML = `
          <h3>${coffee.name}</h3>
          <p><strong>Roast:</strong> ${coffee.roast}</p>
          <p>${coffee.description}</p>
        `;
        coffeeList.appendChild(card);
      });
    }
  
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        };
        localStorage.setItem("contactSubmission", JSON.stringify(data));
        alert("Thank you for reaching out!");
        form.reset();
      });
    }
  });