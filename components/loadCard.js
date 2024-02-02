import { searchURL } from "./searchURL.js"

function loadCard() {

    const ownerNickname = searchURL("o");
    const repoName = searchURL("r");

    document.title = repoName;

    const headingStarsDiv = document.createElement("div")
    headingStarsDiv.classList.add("heading-stars")

    const heading = document.createElement("h1")
    heading.classList.add("info-name");
    heading.classList.add("title--lg");
    heading.textContent = repoName;

    const starDiv = document.createElement("div");
    starDiv.classList.add("star-icon-info");
    starDiv.innerHTML = `<div class = "star" >
    <!-- <?xml version="1.0" encoding="utf-8"?> -->
    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
            stroke="#2c2c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    </ div>`

    const infoStars = document.createElement("p")
    infoStars.classList.add("info-stars")

    const root = document.querySelector("#root")

    root.appendChild(headingStarsDiv)
    headingStarsDiv.appendChild(heading)
    headingStarsDiv.appendChild(starDiv)
    starDiv.appendChild(infoStars)

    const avatarNicknameDiv = document.createElement("div");
    avatarNicknameDiv.classList.add("avatar-nickname");
    const avatarDiv = document.createElement("div");
    avatarDiv.classList.add("avatar");
    const infoAvatar = document.createElement("img");
    infoAvatar.classList.add("info-avatar")
    infoAvatar.setAttribute("alt", "avatar");
    infoAvatar.style.width = "100px";
    infoAvatar.style.height = "auto";
    const descNicknameDiv = document.createElement("div");
    descNicknameDiv.classList.add("desc-nickname");
    const pDesc = document.createElement("p")
    pDesc.classList.add("desc");
    pDesc.textContent = "Owner:";
    const infoNickname = document.createElement("p");
    infoNickname.classList.add("info-nickname");

    root.appendChild(avatarNicknameDiv);
    avatarNicknameDiv.appendChild(avatarDiv);
    avatarDiv.appendChild(infoAvatar);
    avatarNicknameDiv.appendChild(descNicknameDiv);
    descNicknameDiv.appendChild(pDesc);
    descNicknameDiv.appendChild(infoNickname);


    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("div-cont");
    const pDescDesc = document.createElement("p");
    pDescDesc.classList.add("desc");
    pDescDesc.textContent = "Description:"
    const infoDescription = document.createElement("p");
    infoDescription.classList.add("info-description");

    root.appendChild(descriptionDiv);
    descriptionDiv.appendChild(pDescDesc);
    descriptionDiv.appendChild(infoDescription);

    const languagesDiv = document.createElement("div");
    languagesDiv.classList.add("div-cont");
    const pDescLang = document.createElement("p");
    pDescLang.classList.add("desc");
    pDescLang.textContent = "Languages:";
    const infoLanguages = document.createElement("p");
    infoLanguages.classList.add("info-languages");

    root.appendChild(languagesDiv);
    languagesDiv.appendChild(pDescLang);
    languagesDiv.appendChild(infoLanguages);

    const contributorsDiv = document.createElement("div");
    contributorsDiv.classList.add("div-cont");
    const pDescContributors = document.createElement("p");
    pDescContributors.classList.add("desc");
    pDescContributors.textContent = "Contributors:"
    const infoContributors = document.createElement("p");
    infoContributors.classList.add("info-contributors");

    root.appendChild(contributorsDiv);
    contributorsDiv.appendChild(pDescContributors);
    contributorsDiv.appendChild(infoContributors);

    const updatedDiv = document.createElement("div");
    updatedDiv.classList.add("div-cont");
    const pDescUpdated = document.createElement("p");
    pDescUpdated.classList.add("desc");
    pDescUpdated.textContent = "Last updated:"
    const infoUpdated = document.createElement("p");
    infoUpdated.classList.add("info-last-updated");

    root.appendChild(updatedDiv);
    updatedDiv.appendChild(pDescUpdated);
    updatedDiv.appendChild(infoUpdated);

    const goBackAnchor = document.createElement("a");
    goBackAnchor.textContent = "Back to search";
    goBackAnchor.classList.add("go-back")
    goBackAnchor.href = "#";
    goBackAnchor.addEventListener("click", (event) => {
        event.preventDefault()
        window.history.back()
    })

    const goBackDiv = document.createElement("div")
    goBackDiv.classList.add("go-back-div")
    root.appendChild(goBackDiv)
    goBackDiv.appendChild(goBackAnchor)

    const fetchRepoInfo = async (repoOwner, repoName) => {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`);
        const data = await response.json();
        return data
    }

    const renderLanguages = async (repoOwner, repoName) => {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/languages`);
        const data = await response.json();
        const keys = Object.keys(data);
        const languages = keys.join(", ")
        infoLanguages.textContent = languages
    }

    const renderContributors = async (repoOwner, repoName) => {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors?per_page=10&page=1`);
        const data = await response.json();
        const contributorsArr = data.map(contributor => {
            return contributor.login
        })
        const contributors = contributorsArr.join(", ")
        infoContributors.textContent = contributors;

    }

    const renderInfo = async (repoOwner, repoName) => {
        const data = await fetchRepoInfo(repoOwner, repoName);
        const description = data.description;
        const dateUpdated = data.updated_at;
        const personalPageUrl = data.owner.html_url;
        const avatarUrl = data.owner.avatar_url;
        const stars = data.stargazers_count;
        infoAvatar.src = avatarUrl;
        infoDescription.textContent = description;
        infoUpdated.textContent = dateUpdated.substring(0, 10);
        infoNickname.innerHTML = `<a href=${personalPageUrl}>${repoOwner}</a>`
        infoStars.textContent = stars;

    }


    renderInfo(ownerNickname, repoName)
    renderLanguages(ownerNickname, repoName)
    renderContributors(ownerNickname, repoName)


}

export { loadCard }