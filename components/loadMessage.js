function loadMessage (key) {
const message = {
    normal: "Search results:",
    topten: "You have left the input field blank. Here are top ten GitHub repositories instead:",
    nothing: "Nothing found, sorry."
}

return message[key]
}

export {loadMessage}