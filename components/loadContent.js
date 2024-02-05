import { loadCard } from "./loadCard.js"
import { loadMessage } from "./loadMessage.js"
import { baseURL} from "./parseURL.js"

function loadContent(data, key) {

    const repos = data.items;

    const message = document.createElement("p");
    message.classList.add("message");
    message.textContent = loadMessage(key);
    document.querySelector("#root").appendChild(message);

    if (repos.length === 0) {
        message.textContent = loadMessage("nothing")
        return null
    }

    repos.forEach(repo => {
        const repoLi = document.createElement("li");
        const repoAnchor = document.createElement("a");
        repoAnchor.classList.add("more-info");

        // const hostname = "localhost:5175"
        repoAnchor.href = `${baseURL}?r=${encodeURIComponent(repo.name)}&o=${encodeURIComponent(repo.owner.login)}`;

        repoAnchor.setAttribute("target", "_blank")
        repoAnchor.setAttribute("data-repo-name", `${repo.name}`);
        repoAnchor.setAttribute("data-owner-nickname", `${repo.owner.login}`);
        repoAnchor.innerHTML = `<h2 class="repo-heading title">${repo.name} </h2>`

        repoAnchor.addEventListener("click", (event) => {
            event.preventDefault()
            history.pushState(null, null, repoAnchor.href)
            document.querySelector("#root").innerHTML = "";
            document.querySelector("#paginationRoot").innerHTML = "";
            loadCard()
        })

        const repoOwnerDiv = document.createElement("div");
        repoOwnerDiv.classList.add("repo-owner")
        repoOwnerDiv.classList.add("div-cont");
        repoOwnerDiv.innerHTML = `<p class="desc"> owner:</p><p> ${repo.owner.login}</p>`
        const repoStarsDiv = document.createElement("div");
        repoStarsDiv.classList.add("star-count")
        repoStarsDiv.classList.add("div-cont");
        repoStarsDiv.innerHTML = `<div class="star">
          <?xml version="1.0" encoding="utf-8"?>
          <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>:
          </div>
          <p>${repo.stargazers_count}</p>`;
        const repoUpdatedDiv = document.createElement("div");
        repoUpdatedDiv.classList.add("updated");
        repoUpdatedDiv.innerHTML = `<div><p class="desc">updated at:</p>
          <p> ${repo.updated_at.substring(0, 10)}</p>
          </div>
          <div>
          <div class="arrow">
          <?xml version="1.0" encoding="UTF-8"?>
      <svg width="16px" height="16px"viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          
          <title>right-arrow</title>
          <desc>Created with Sketch.</desc>
          <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-212.000000, -159.000000)" fill="#2c2c2c" fill-rule="nonzero">
                  <g id="square-filled" transform="translate(50.000000, 120.000000)">
                      <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow">
      
      </path>
                  </g>
              </g>
          </g>
      </svg>
      </div>
      <a href=${repo.html_url} target="_blank">Link to GitHub</a>
      </div>`


        const list = document.createElement("ul");
        list.id = "repos-list";
        document.querySelector("#root").appendChild(list);
        list.appendChild(repoLi);
        repoLi.appendChild(repoAnchor);
        repoLi.appendChild(repoOwnerDiv)
        repoLi.appendChild(repoStarsDiv);
        repoLi.appendChild(repoUpdatedDiv);
    })
}



export { loadContent }


