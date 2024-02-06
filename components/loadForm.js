import { renderPage } from "./renderPage.js";

function loadForm() {

    document.title = "Search repositories"

    const pageHeader = document.createElement("header");

    const formHeading = document.createElement("h1");
    formHeading.classList.add("title--lg");
    formHeading.textContent = "GitHub repos";

    document.querySelector("#root").appendChild(pageHeader);
    pageHeader.appendChild(formHeading);

    const form = document.createElement("form");
    form.id = "repos-form";

    const label = document.createElement("label");
    label.setAttribute("for", "repo-name");
    label.textContent = "Find a Github repository";

    const input = document.createElement("input");
    input.id = "repo-name";
    input.type = "text";
    input.setAttribute("placeholder", "Search GitHub");

    const button = document.createElement("button");
    button.type = "submit";
    button.id = "get-repos";
    button.classList.add("btn");
    button.classList.add("btn-default");
    button.textContent = "Get repos";

    form.addEventListener("submit", event => {
        event.preventDefault();

        const repoName = document.querySelector("#repo-name")
        document.querySelector("#content-root").innerHTML = "";
        document.querySelector("#pagination-root").innerHTML = "";

        history.pushState(null, null, `./?q=${encodeURIComponent(repoName.value)}&p=1`)
        // loadForm()
        renderPage(repoName.value, 1)

    })


    document.querySelector("#root").appendChild(form);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);

    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("q") && searchParams.has("p")) {
        input.value = decodeURIComponent(searchParams.get("q"))
    }

}

export { loadForm }