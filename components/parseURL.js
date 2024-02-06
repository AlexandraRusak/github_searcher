import { renderPage } from "./renderPage.js";
import { loadForm } from "./loadForm.js";
import { loadCard } from "./loadCard.js"

const baseURL = window.location.origin
    

function parseURL(url) {

    
        const searchParams = new URLSearchParams(url);

        if (searchParams.has("q") && searchParams.has("p"))
        
        {
            const searchRequest = decodeURIComponent(searchParams.get("q"))
            const page = Number(searchParams.get("p"))
            loadForm()
            renderPage(searchRequest, page)
        }
        
        else if (searchParams.has("r") && searchParams.has("o"))
       
        {
                loadCard()
        }
        
        
        else {
            loadForm()
        }

    }

export { parseURL, baseURL }