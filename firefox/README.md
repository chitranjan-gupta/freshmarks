# FreshMarks
### A Firefox extension that updates bookmarks with redirected URLs.
## Description
> This extension listens for HTTP redirects and updates the corresponding bookmarks with the new URL.

## Features
1. Listens for HTTP redirects (301, 302)
2. Updates bookmarks with the new URL
3. Supports multiple bookmarks

## Installation

### Prerequisites
- Firefox version 68 or later
- Firefox Extensions developer mode enabled

1. Download the extension: Clone the repository or download the zip file.
2. Extract the zip file: If you downloaded the zip file, extract it to a folder.
3. Go to Firefox Extensions page: Type ```about:debugging``` in the Firefox address bar and press Enter.
4. Enable Developer Mode: Toggle the ```Enable Developer Mode``` switch.
5. Load the extension: Click ```Load Temporary Add-on``` and select the manifest.json file from the extracted folder.
6. Confirm installation: Click ```Add``` to confirm installation.
7. Pin the extension: Click the puzzle icon in the top-right corner, then click the ```Bookmark Updater``` icon and select ```Pin``` to pin it to the toolbar.

### Alternative Installation Method

1. Create a new directory: Create a new directory for your extension.
2. Create a manifest.json file: Copy the manifest.json file from the repository into your new directory.
3. Create a background.js file: Copy the background.js file from the repository into your new directory.
4. Zip the directory: Zip the directory containing the manifest.json and background.js files.
5. Go to Firefox Add-ons page: Type about:addons in the Firefox address bar and press Enter.
6. Click ```Install Add-on From File```: Click the gear icon and select ```Install Add-on From File```.
7. Select the zip file: Select the zip file you created.

### Enable in Incognito
1. Go to Firefox Add-ons page: Type ```about:addons``` in the Firefox address bar and press Enter.
2. Find FreshMarks: Locate the FreshMarks extension in the list.
3. Click the three dots: Click the three dots next to the ```Manage``` button.
4. Select ```Allow in Private Windows```: Select the ```Allow in Private Windows``` option.

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