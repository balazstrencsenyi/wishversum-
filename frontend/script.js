import { createHeader, createLandingPage, saveData } from "./controllers/saveData.js";

function init() {
  const root = document.querySelector("#root");

  // Create header
  const header = createHeader();
  root.appendChild(header);

  // Create landing page
  const landingPage = createLandingPage();
  root.appendChild(landingPage);
}

// Initialize the application
window.onload = init;
