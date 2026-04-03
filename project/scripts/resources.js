const container = document.getElementById("resources-container");

async function loadResources() {
  try {
    const response = await fetch("data/resources.json");

    if (!response.ok) {
      throw new Error("Failed to fetch resources");
    }

    const resources = await response.json();

    resources.forEach(resource => {
      const card = document.createElement("div");
      card.classList.add("resource-card");

      card.innerHTML = `
        <img src="${resource.image}" alt="${resource.title}">
        
        <div class="resource-content">
          <h3>${resource.title}</h3>
          <p>${resource.description}</p>
          <a href="${resource.link}" target="_blank" class="resource-btn">Learn More</a>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error(error);

    container.innerHTML = `
      <p class="error-message">
        Sorry, resources could not be loaded at the moment.
      </p>
    `;
  }
}

loadResources();
