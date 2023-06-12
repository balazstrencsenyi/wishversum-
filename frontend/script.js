import { createHeader } from './model/createDom.js';

const root = document.getElementById("root")

function main () {
  
  root.append(createHeader())
}

window.onload = () => {
  main(); 
 }
 

