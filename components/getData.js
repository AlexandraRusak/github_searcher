
const getData = async (userInput, pageIndex) => {

    const generateAPIURL = (userInput, pageIndex) => `https://api.github.com/search/repositories?q=${(encodeURIComponent(userInput))}&sort=stars&order=desc&per_page=10&page=${pageIndex}`


    try {
        const response = await fetch(generateAPIURL(userInput, pageIndex));

        if (!response.ok) {
            // 4xx or 5xx error
            throw new Error("API issues.");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error)
    }
}

export { getData }