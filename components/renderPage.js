import { loadContent } from "./loadContent.js";
import { paginate } from "./paginate.js";
import { getData } from "./getData.js";
import { getTopTen } from "./getTopTen.js"

const renderPage = async (userInput, pageIndex = 1) => {

    if (userInput) 

    {
    const data = await getData(userInput, pageIndex);
    if (data) {
        loadContent(data, "normal");
        paginate(userInput, pageIndex, data);
    }
    } 
    
    else
    
    {
    const dataTopTen = await getTopTen()
    if (dataTopTen) {
        loadContent(dataTopTen, "topten")
    }
    }
  
}

export { renderPage }