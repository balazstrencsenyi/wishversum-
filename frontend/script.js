import { createHeader, createLandingPage, createWishForm } from './model/createDom.js';

const root = document.getElementById("root")

function main () {
  
  root.append(createHeader(), createLandingPage(), createWishForm())
}

window.onload = () => {
  main(); 
 }
 

