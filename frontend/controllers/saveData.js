import { get } from "../utils/utils.js";
import { createEl } from "../utils/utils.js";

const root = document.getElementById("root");

export async function getPlayers() {
  const players = await get("/players");

  const middleContainer = document.getElementById("middle-container");

  const form = document.getElementById("form");

  const imageContainer = createEl("div");
  imageContainer.id = "sliders";
  const prevButton = createEl("button");
  const nextButton = createEl("button");

  let currentIndex = 0; // Track the index of the current player being displayed

  function showPlayer(index) {
    const player = players[index];

    const image = createEl("img");
    image.src = player.image_url;
    image.alt = player.title;

    const inputContainer = document.getElementById("input-container");

    const url = createEl("input");
    url.type = "text";
    url.value = player.image_url;

    const title = createEl("input");
    title.type = "text";
    title.value = player.title;

    const uploadDate = createEl("input");
    uploadDate.type = "text";
    uploadDate.value = player.upload_date;

    const photographer = createEl("input");
    photographer.type = "text";
    photographer.value = player.photographer;

    const uploadButton = createEl("button");
    uploadButton.innerText = "Upload";
    uploadButton.addEventListener("click", async (e) => {
      e.preventDefault();

      const formData = {
        image_url: url.value,
        title: title.value,
        upload_date: uploadDate.value,
        photographer: photographer.value,
      };

      const response = await fetch("/newPlayers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    });

    const deleteButton = createEl("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", async (e) => {
      e.preventDefault();

      const formData = {
        image_url: url.value,
        title: title.value,
        upload_date: uploadDate.value,
        photographer: photographer.value,
      };

      const response = await fetch("/deletePlayer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    });

    form.innerHTML = ""; // Clear the form before adding new elements
    inputContainer.innerHTML = ""; // Clear the input container before adding new elements
    inputContainer.append(url, title, uploadDate, photographer, uploadButton, deleteButton);
    form.append(image, inputContainer);
  }

  function updateButtons() {
    prevButton.disabled = currentIndex === 0; // Disable previous button if at the first player
    nextButton.disabled = currentIndex === players.length - 1; // Disable next button if at the last player
  }

  prevButton.innerText = "Previous";
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      showPlayer(currentIndex);
      updateButtons();
    }
  });

  nextButton.innerText = "Next";
  nextButton.addEventListener("click", () => {
    if (currentIndex < players.length - 1) {
      currentIndex++;
      showPlayer(currentIndex);
      updateButtons();
    }
  });

  updateButtons();

  imageContainer.append(prevButton, nextButton);
  middleContainer.append(imageContainer, form);

  // Show the first player initially
  showPlayer(currentIndex);
}


