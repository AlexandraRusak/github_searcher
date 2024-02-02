import "./components/container.css";
import "./components/_defaults.css";
import "./components/pagination.css";
import "./components/repos.css";
import "./components/anchors.css";
import "./components/typography.css";
import "./components/form.css";
import "./components/button.css";
import "./components/card.css"

import { parseURL } from "./components/parseURL.js";

parseURL(window.location.search)

window.addEventListener("popstate", () => {
  document.querySelector("#root").innerHTML ="";
  document.querySelector("#paginationRoot").innerHTML = "";
  parseURL(window.location.search)
})




