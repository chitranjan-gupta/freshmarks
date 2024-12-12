// Listen for form submission
document.getElementById('bookmarkForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the values from the form fields
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;
    const error = document.getElementById('error');

    // Check if both title and URL are provided
    if (title && url) {
		error.innerText = "Status: Adding Bookmark";
        // Use the Chrome bookmarks API to add the bookmark
        chrome.bookmarks.create({
            title: title,
            url: url
        }, function(newBookmark) {
            console.log('Bookmark added:', newBookmark);
            error.innerText = "Status: Bookmark added";
        });
    } else {
    	error.innerText = "Status: Please provide both title and URL.";
        alert('Please provide both title and URL.');
    }
});
