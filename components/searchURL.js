function searchURL (key) {
    const searchParams = new URLSearchParams(window.location.search);
    return decodeURIComponent(searchParams.get(key))
}

export {searchURL}