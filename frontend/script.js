import { createHeader } from "./model/createdom"
const root = document.getElementById("root")

function main () {
  
  createHeader()
  root.append(createHeader())
}

window.onload = main

