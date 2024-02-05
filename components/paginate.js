import { renderPage } from "./renderPage.js";
import { loadForm } from "./loadForm.js";
import {baseURL} from "./parseURL.js"

function paginate(userInput, pageIndex, data) {

    let currentPage

    const setCurrent = (page) => {
        if (currentPage) {
            currentPage.classList.remove('current');
        }
        currentPage = page;
        currentPage.classList.add('current');
    }

    const pageCount = Math.ceil(data.total_count / 10); 
    if (pageCount <= 1) {
        return null
    }
    let leftLimit = pageIndex - 2;
    let rightLimit = pageIndex + 2;

    if (pageIndex <= 2) {
        leftLimit = 1;
        rightLimit = Math.min(5, pageCount);
    }

    else if (pageIndex > pageCount - 2) {
        rightLimit = pageCount;
        leftLimit = Math.max(pageCount - 4, 1);
    }

    const paginationUl = document.createElement("ul");
    paginationUl.id = "pagination-numbers";

    const paginationNav = document.createElement("nav");

    document.querySelector("#paginationRoot").appendChild(paginationNav);
    paginationNav.appendChild(paginationUl);

    if (leftLimit >= 3) {
    const backToStart = document.createElement("a");
    backToStart.classList.add("back-to-start");
    backToStart.href = `${baseURL}?q=${userInput}&p=1`
    backToStart.textContent = "1";
    backToStart.addEventListener("click", (event) => {
        event.preventDefault();
        history.pushState(null, null, backToStart.href)
        document.querySelector("#root").innerHTML = "";
        document.querySelector("#paginationRoot").innerHTML = "";
        loadForm()
        renderPage(userInput, 1)
    })

    const backToStartLi = document.createElement("li")
    backToStartLi.classList.add("back-to-start-li")
    paginationUl.appendChild(backToStartLi);
    backToStartLi.appendChild(backToStart)
}


    for (let i = leftLimit; i <= rightLimit; i++) {
        const pageNumber = document.createElement("a");
        pageNumber.classList.add("pagination-number");
        pageNumber.textContent = i;
        pageNumber.setAttribute("data-page-index", `${i}`)
        pageNumber.setAttribute("aria-label", "Page " + `${i}`);
        pageNumber.href = `${baseURL}?q=${userInput}&p=${i}`;
        if (i === pageIndex) {
            setCurrent(pageNumber)
        }
        pageNumber.addEventListener("click", (event) => {
            event.preventDefault()
            history.pushState(null, null, pageNumber.href)
            document.querySelector("#root").innerHTML = "";
            document.querySelector("#paginationRoot").innerHTML = "";
            setCurrent(pageNumber)
            let pageAttribute = Number(pageNumber.getAttribute("data-page-index"))
            loadForm()
            renderPage(userInput, pageAttribute)
        })


        const pageLi = document.createElement("li");
        pageLi.classList.add("pagination-li")
        paginationUl.appendChild(pageLi);
        pageLi.appendChild(pageNumber);
    }
}

export { paginate }

