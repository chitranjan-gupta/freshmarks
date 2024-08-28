'use strict';

async function updateBookmark(responseDetails) {
  try {
    console.log("webResponse", responseDetails);
    // Getting location response header it contains object { name: 'location', value: 'https://example.org'}
    const locationHeader = responseDetails.responseHeaders.find(header => header.name === 'location');
    // Getting the url and status code
    const { url, statusCode } = responseDetails;
    let redirectUrl = null;
    if (locationHeader) {
      //Converting the protocol url or relative url to absolute url
      const urlObject = new URL(locationHeader.value, url);
      redirectUrl = urlObject && urlObject.href ? urlObject.href : null;
      /*if(locationHeader.value.startsWith("//")){
        redirectUrl = locationHeader && locationHeader.value ? `https://${locationHeader.value}`: null;
      }else if(locationHeader.value.startsWith("/")){
        redirectUrl = locationHeader && locationHeader.value ? `${url}${locationHeader.value}`: null;
      }else if(locationHeader.value.startsWith("https://") || locationHeader.value.startsWith("http://")){
        redirectUrl = locationHeader && locationHeader.value ? locationHeader.value : null;
      }else{
        redirectUrl = locationHeader ? url : null;
      }*/
    }
    try {
      //Searching in the bookmarks that current url is present or not
      const bookmarks = await chrome.bookmarks.search({ url: url });
      if (bookmarks.length > 0) {
        const currentBookmark = bookmarks[0];
        console.log("Bookmark found:", currentBookmark);
        //checking that the current url has redirected or not
        if ([301, 302].includes(statusCode)) {
          console.log(`Redirect detected: ${url} to ${redirectUrl}`);
          if (redirectUrl) {
            await chrome.bookmarks.update(currentBookmark.id, { url: redirectUrl });
          }
        }
      } else {
        console.log(`No bookmark found for URL: ${url}`);
      }
    } catch (error) {
      console.error('Error searching bookmarks:', error);
    }
  } catch (error) {
    console.error('Error updating bookmark:', error);
  }
}

chrome.webRequest.onHeadersReceived.addListener(
  async function (responseDetails) {
    await updateBookmark(responseDetails);
    return { responseHeaders: responseDetails.responseHeaders };
  },
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["responseHeaders"]
);