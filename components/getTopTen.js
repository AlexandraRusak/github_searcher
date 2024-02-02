async function getTopTen() {
        try {
          const response = await fetch("https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=10&page=0");
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
      

export {getTopTen}