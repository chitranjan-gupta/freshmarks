# FreshMarks
### A Chrome extension that updates bookmarks with redirected URLs.
## Description
> This extension listens for HTTP redirects and updates the corresponding bookmarks with the new URL.

## Features
1. Listens for HTTP redirects (301, 302)
2. Updates bookmarks with the new URL
3. Supports multiple bookmarks

## Installation
1. Clone the repository or download the zip file.
2. Go to Chrome extensions page by typing chrome://extensions/ in the address bar.
3. Enable Developer mode.
4. Click "Load unpacked".
5. Select the extension's folder.

## Permissions
- webRequest: To listen for HTTP requests and redirects.
- bookmarks: To update bookmarks.
- tabs: To access tab information.

## Usage
Bookmark a page.
If the page redirects, the bookmark will be updated with the new URL.

## Note
This extension uses a non-blocking webRequest listener and cannot modify request headers.

## Version
1.0

## License
MIT License

## Author
Chitranjan Gupta