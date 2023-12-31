import { createHeader, createLandingPage, saveData } from './controllers/saveData.js';
import { whenScrolled } from './controllers/scroll.js';
import { buildCards } from './controllers/buildCards.js';

export async function main() {
  const root = document.querySelector('#root');

  const header = createHeader();
  root.appendChild(header);

  const landingPage = createLandingPage();
  root.appendChild(landingPage);

}

window.onload = async () => {
  await main();
  saveData();
  whenScrolled();
};
