# DevSurf — User Guide

DevSurf is a mobile browser built for web developers. It wraps the system Android WebView and adds built-in DevTools, an ad blocker, and debugging helpers.

This guide explains how to browse, use DevTools, manage the ad blocker, and change settings.

---

## Quick start

1. Open DevSurf and accept the welcome screen.
2. Tap the **address bar** at the top to enter a URL or search query.
3. Browse like any other browser: swipe between tabs, use back/forward, pull down to refresh.
4. Tap the **terminal icon** in the top bar to open **DevTools**.
5. Tap the **menu (⋮)** for more actions: history, screenshots, ad blocking, settings.

---

## Main screen

### Address bar

- Tap it to open full-screen search/URL input.
- Suggestions come from your web history, search history, and the selected search engine.
- Press **Search** or **Open** to go to the page.

### Top bar buttons

| Button | What it does |
|--------|----------------|
| **Terminal** | Open or close DevTools (bottom panel) |
| **Tab count** | Open the tab switcher |
| **Menu (⋮)** | Browser menu (navigation, tools, settings) |

### Tabs

- Tap the tab count to see all open tabs in a grid.
- Tap **New tab** to open another tab.
- Swipe left/right on the page area to switch between tabs.
- Close a tab from the tab switcher.
- Tabs are saved when you leave the app. Under low memory, inactive tabs may be unloaded from RAM (you will see a notice).

### Pull to refresh

If enabled in Settings, pull down on a page to reload it.

---

## Browser menu

Open the menu with the **⋮** button in the top bar.

### Navigation row

- **Back** / **Forward** — page history inside the current tab
- **Info** — page details (URL, security, JavaScript, cookies, User-Agent)
- **Refresh** / **Stop** — reload or stop loading

### Tools and actions

| Item | Description |
|------|-------------|
| **Eruda ON/OFF** | Show or hide the Eruda in-page console (only if Eruda is enabled in Settings) |
| **Blocked..** | Per-site ad blocker controls and list of blocked requests (only if ad blocker is on) |
| **Block element on site** | Tap an element on the page to block it with a custom filter rule |
| **Save as screenshot** | Capture the visible page or full page (see Settings → JS full screenshot) |
| **Reload & clear** | Reload the page and clear site data (cookies, storage) for this site |
| **History** | Web and search history |
| **Settings** | App settings |
| **Exit** | Close the app |

---

## Long-press menu (links and images)

Long-press a link or image on a page:

- **Copy link** / **Copy image link**
- **Open in new tab**
- **Share**
- **Open in external browser**
- **Inspect element** — opens DevTools on the Elements tab and starts element picking
- **Download** — saves the file to Downloads (storage permission may be required on older Android versions)

---

## DevTools

DevTools is a bottom panel with developer tools similar to desktop browser inspectors.

### How to open DevTools

1. Tap the **terminal icon** in the top bar, or
2. Long-press a link/image → **Inspect element**

### Panel controls

- **Drag the handle** at the top to resize the panel height.
- Use the **opacity slider** to make the panel more transparent.
- Switch between tabs: **Console**, **Network**, **Elements**, **Js Injector** (tabs can be turned on/off in Settings → DevTools).

---

### Console tab

Shows messages from the page (`console.log`, errors, warnings).

**What you can do:**

- Read page console output
- Filter by **Errors**, **Warnings**, **Info**, **Logs**
- Type JavaScript in the input field and press **Run** to evaluate code on the page
- Open **Console history** to re-run previous commands
- **Attach file** to run a JavaScript file on the page

---

### Network tab

Shows network requests made by the page.

**What you can do:**

- See method, status, type, size, and time for each request
- Tap a request to open details: headers, payload, response body
- Toggle cached requests on/off

**Tip:** For images, scripts, and styles, enable **Proxy all resources** in Settings → DevTools. This captures more data but makes browsing slower.

---

### Elements tab

A DOM inspector: pick elements, view styles, edit inline CSS, block elements for ad filter.

**What you can do:**

- **Refresh DOM** — capture the current DOM tree
- **Save DOM** — export the full DOM as an HTML file
- **Wrap lines** — toggle long-line wrapping in the DOM tree (off by default; long lines scroll horizontally when wrap is off). Applies to the main tree and the **View** sub-tab inside node details.
- **Pick element** — tap an element on the page to select it in the tree (uses text under the tap when possible)
- Browse the DOM tree and view node details (tag, attributes, text, children)
- **View** tab — see the subtree as HTML; **Styles** tab — view and edit inline styles
- **Highlight**, **Scroll to**, save or copy HTML
- **Block element** — add a cosmetic ad-block rule for the selected element

> DOM search in the Elements panel is temporarily disabled.

---

### Find in page

When viewing a page, use the find bar (from the browser chrome) to search text on the page. DevSurf uses a JavaScript-based search that works better on complex sites (including shadow DOM) than the built-in WebView finder.

---

### Js Injector tab

Manage user scripts that run on web pages.

**What you can do:**

- Create, edit, import, and delete JavaScript scripts
- Turn **Auto-inject** on/off per script (scripts run automatically when a page loads)
- Scripts are stored on your device

---

## Eruda (in-page console)

Eruda is a separate mobile debug console that appears **inside the web page** (not in the DevTools panel).

- Turn it on/off in **Settings → Developer → Eruda**
- Or use **Menu → Eruda ON/OFF** while browsing
- Useful for quick checks on any site without opening the DevTools panel

---

## Ad blocker

DevSurf includes a built-in ad blocker (similar to desktop filter lists).

### Global toggle

**Settings → Privacy & Security → Ad blocker** — turn blocking on or off for all sites.

### Filter lists

**Settings → Privacy & Security → AdBlock filters**

- DevSurf downloads **EasyList** on first run.
- You can add more filter subscriptions (URL), download, update, rename, or delete them.
- **Import from file** — add a filter list from your device.
- **Custom filter** — write your own rules or enable/disable them.
- **Edit rules** — view or edit rules for a filter (very large filters may be view-only).

### Per-site control

**Menu → Blocked..**

- See how many requests were blocked on the current site
- Enable or disable the ad blocker for the current website only
- View the list of blocked URLs

### Block an element manually

1. Make sure **Ad blocker** and **JavaScript** are enabled.
2. **Menu → Block element on site**
3. Tap the ad or element on the page
4. Confirm — a rule is added to your custom filter and the element is hidden

You can also block elements from the DevTools **Elements** tab (debug builds).

---

## History

**Menu → History**

Two tabs:

- **Web** — pages you visited
- **Search** — search queries you entered

Tap an item to open it. Swipe or use delete to remove items. Use **Clear** to wipe an entire tab's history.

To clear all history at once: **Settings → Data → Clear all history**.

---

## Downloads

- Long-press a link → **Download**
- Or let the page trigger a download (file picker dialog)
- Files are saved to the system **Downloads** folder
- On Android 9 and older, storage permission may be required

---

## Screenshots

**Menu → Save as screenshot**

- With **JS full screenshot** off: captures only the visible part of the page.
- With **JS full screenshot** on (default): captures the full scrollable page.

A preview opens when the capture is done. Saving to gallery is not yet implemented — you can view the screenshot in the preview dialog.

---

## Settings

Open **Menu → Settings**.

### Support (free version only)

- **Remove ads** — one-time purchase via Google Play to disable ads on the settings screen.

### Appearance

| Setting | Description |
|---------|-------------|
| **Theme** | Light, Dark, or follow system |
| **Language** | App language (13 languages supported) or system default |
| **Blur effects** | Blur background when address bar or settings are open |

### Search

| Setting | Description |
|---------|-------------|
| **Search engine** | Google, DuckDuckGo, Bing, Yandex, or Ecosia |

### Browser

| Setting | Description |
|---------|-------------|
| **Pull to refresh** | Pull down to reload pages |
| **Overscroll effect** | Edge bounce when scrolling past page limits |
| **Desktop mode** | Request desktop versions of sites (cannot be used with a custom User-Agent) |
| **Custom User-Agent** | Set your own browser identification string |
| **WebView settings** | Advanced WebView options (see below) |

### Privacy & Security

| Setting | Description |
|---------|-------------|
| **JavaScript** | Allow pages to run JavaScript |
| **Ad blocker** | Block ads and trackers |
| **AdBlock filters** | Manage filter lists (requires ad blocker on) |
| **Save form data** | Remember form inputs |
| **Do Not Track** | Send DNT header to websites |
| **Cookies** | Allow cookies |
| **Third-party cookies** | Allow cookies from other domains (requires cookies on) |
| **Allow copy & selection** | Let you select text on sites that block selection (on by default) |
| **Copy selection only** | Paste only the selected text without site attribution (e.g. “Source: …”). Off by default — enabling it may show the system copy toolbar away from the selection |

### Data

| Setting | Description |
|---------|-------------|
| **Clear all history** | Remove web and search history |
| **Clear browsing data** | Clear cache, cookies, and WebView storage |
| **Clear all data & restart** | Reset the entire app to factory defaults and restart |

### Developer

| Setting | Description |
|---------|-------------|
| **Eruda** | Inject Eruda console into pages |
| **JS full screenshot** | Use full-page tiled capture for screenshots |

### DevTools

| Setting | Description |
|---------|-------------|
| **DevTools: Console** | Show Console tab |
| **DevTools: Network** | Show Network tab |
| **Proxy all resources** | Capture network details for images, scripts, styles (slower) |
| **DevTools: Elements** | Show Elements tab |
| **DevTools: Js Injector** | Show Js Injector tab |

---

## WebView settings (advanced)

**Settings → Browser → WebView settings**

These options control low-level WebView behavior. Change them only if you know what you need.

**Storage:** DOM Storage, file access, content access

**Display:** Zoom, built-in zoom controls, wide viewport, load with overview, text auto-sizing, algorithmic darkening (Android 13+)

**Behavior:** Media requires gesture, JavaScript popups

**Security:** Mixed content mode (always allow / never allow / compatibility)

**Cache:** Cache mode (default, cache-first, no cache, cache only)

---

## Opening links from other apps

DevSurf can open `http://` and `https://` links shared from other apps (via Android's "Open with" / default browser).

---

## Troubleshooting

### WebView not working

If you see a "WebView provider" error:

1. Install or update **Android System WebView** or **Google Chrome**
2. In Android **Developer options**, select a WebView implementation
3. Try clearing DevSurf's cache (not full data) in system app settings
4. Restart the device

### Page looks wrong

- Try toggling **Desktop mode** in Settings
- Check **JavaScript** is enabled
- Try **Reload & clear** from the menu to reset site data

### Ad blocker too aggressive

- **Menu → Blocked..** → disable for this site
- Or edit **Custom filter** rules in AdBlock filters

### Copy toolbar appears in the wrong place

If the system **Copy** bar shows at the top of the screen instead of near your selection, turn off **Settings → Privacy & Security → Copy selection only**. That strict mode removes site attribution from copied text but can break toolbar positioning on some pages. With it off, selection still works when **Allow copy & selection** is on; sites may add their own text (such as a source URL) to the clipboard.

### DevTools Elements tab missing

Make sure **Settings → DevTools → DevTools: Elements** is enabled.

---

## What DevSurf does not have (yet)

- Bookmarks
- Saving screenshots to gallery (preview only)
- Sync across devices

---

## Privacy note

DevSurf loads web content from the sites you visit. The app author is not responsible for external web content. Browsing history and settings are stored locally on your device.
